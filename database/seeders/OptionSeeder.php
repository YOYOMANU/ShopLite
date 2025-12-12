<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $options = [
            'Balcon',
            'Piscine',
            'Garage',
            'Jardin',
            'Terrasse',
            'Climatisation',
            'Cheminée',
            'Cave',
            'Ascenseur',
            'Sécurité 24h',
        ];

        foreach ($options as $option) {
            Option::create(['name' => $option]);
        }
    }
}
