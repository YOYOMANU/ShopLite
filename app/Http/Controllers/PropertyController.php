<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Option;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use App\Http\Resources\PropertyResource;
use App\Http\Requests\FormPropertyRequest;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Property::query()->orderFromRequest($request);

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        return Inertia::render('Property/index', [
            'q' => $search,
            'collection' => PropertyResource::collection($query->paginate(10)->withQueryString()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $property = new Property();
        $property->fill([
            'surface' => 40,
            'rooms' => 3,
            'bedrooms' => 1,
            'floor' => 0,
            'city' => 'Montpelier',
            'postal_code' => 34000,
            'sold' => false,
        ]);
        return $this->edit($property);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormPropertyRequest $request)
    {
        $property = Property::create($request->validated());
        $this->handleFormRequest($property, $request);

        // Mettre à jour les options liées après création
        if ($request->has('options')) {
            $property->options()->sync($request->input('options'));
        } else {
            $property->options()->sync([]);
        }

        return to_route('property.index')->with('success', "Le bien a bien été créer");
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        // 🔥 Récupérer toutes les options
        $options = Option::all()->map(function ($option) {
            return [
                'label' => $option->name,
                'value' => (string) $option->id,
            ];
        });

        // IDs des options déjà liées au bien (pour pré-sélection)
        $selectedOptions = $property && $property->exists
            ? $property->options()->pluck('options.id')->map(fn($id) => (string) $id)->toArray()
            : [];

        return Inertia::render('Property/form', [
            'Property' => new PropertyResource($property),
            'options' => $options,
            'selectedOptions' => $selectedOptions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormPropertyRequest $request, Property $property)
    {
        // Mettre à jour les champs principaux du bien
        $property->update($request->validated());

        // Gérer l'image
        $this->handleFormRequest($property, $request);

        // 🔥 Mettre à jour les options liées
        if ($request->has('options')) {
            $property->options()->sync($request->input('options'));
        } else {
            $property->options()->sync([]);
        }

        return to_route('property.index')->with('success', "Le bien a bien été modifié");
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        $property->delete();

        return to_route('property.index')->with('success', "Le bien a bien été supprimé");
    }



    private function handleFormRequest(Property $property, FormPropertyRequest $request)
    {
        $image = $request->validated('image');
        if ($image && $image instanceof UploadedFile) {
            $property->addMedia($image)->toMediaCollection('image');
        }
    }
}
