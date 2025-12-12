<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormPropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:3'],
            'description' => ['string', 'min:3'],
            'surface' => ['numeric'],
            'rooms' => ['numeric'],
            'bedrooms' => ['numeric'],
            'floor' => ['numeric'],
            'price' => ['numeric'],
            'city' => ['string', 'min:3'],
            'address' => ['string', 'min:3'],
            'postal_code' => ['string', 'min:3'],
            'sold' => ['boolean'],
            'image' => ['nullable', 'file', 'mimes:jpg,jpeg,png,gif', 'max:2048'],
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        // Normalize checkbox-like values to boolean so the `boolean` rule accepts them.
        if ($this->has('sold')) {
            $val = $this->input('sold');

            // Common truthy representations
            $truthy = ['1', 1, 'true', true, 'on', 'yes', 'y'];

            $this->merge([
                'sold' => in_array($val, $truthy, true),
            ]);
        } else {
            // If not present, treat as false
            $this->merge([
                'sold' => false,
            ]);
        }
    }
}
