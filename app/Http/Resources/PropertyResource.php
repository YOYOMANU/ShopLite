<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{

    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'description' => $this->resource->description,
            'surface' => $this->resource->surface,
            'rooms' => $this->resource->rooms,
            'bedrooms' => $this->resource->bedrooms,
            'floor' => $this->resource->floor,
            'price' => $this->resource->price,
            'city' => $this->resource->city,
            'address' => $this->resource->address,
            'postal_code' => $this->resource->postal_code,
            'sold' => $this->resource->sold,
            'options' => $this->resource->options,
            'image' => $this->resource->getFirstMediaUrl('image', 'thumb'),
        ];
    }
}
