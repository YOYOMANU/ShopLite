<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use App\Http\Resources\OptionsResource;
use App\Http\Requests\FormOptionRequest;
use App\Http\Requests\StoreOptionRequest;
use App\Http\Requests\UpdateOptionRequest;

class OptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Option::query()->orderFromRequest($request);

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        return Inertia::render('Options/index', [
            'q' => $search,
            'collection' => OptionsResource::collection($query->paginate(10)->withQueryString()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $options = new Option();

        return $this->edit($options);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormOptionRequest $request)
    {
        $option = Option::create($request->validated());
        $this->handleFormRequest($option, $request);

        return to_route('options.index')->with('success', "L'option a bien été modifié");
    }

    /**
     * Display the specified resource.
     */
    public function show(Option $option)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Option $option)
    {
        return Inertia::render('Options/form', [
            'option' => new OptionsResource($option),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormOptionRequest $request, Option $option)
    {
        $option->update($request->validated());
        $this->handleFormRequest($option, $request);

        return to_route('options.index')->with('success', "L'option a bien été modifié");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Option $option)
    {
        $option->delete();

        return to_route('options.index')->with('success', "L'option a bien été supprimé");
    }


    private function handleFormRequest(Option $option, FormOptionRequest $request)
    {
        $image = $request->validated('image');
        if ($image && $image instanceof UploadedFile) {
            $option->addMedia($image)->toMediaCollection('image');
        }
    }
}
