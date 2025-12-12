<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $properties = [
            [
                'title' => 'Appartement moderne avec vue sur la mer',
                'description' => 'Magnifique appartement de 120m² avec balcon et vue panoramique sur la mer. Proche du centre-ville et des commerces.',
                'surface' => 120,
                'rooms' => 5,
                'bedrooms' => 3,
                'floor' => 4,
                'price' => 350000,
                'city' => 'Abidjan Cocody',
                'address' => '12 Rue des Cocotiers, Cocody',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Villa spacieuse avec piscine',
                'description' => 'Villa de 250m² avec 4 chambres, piscine et jardin privatif. Idéale pour famille.',
                'surface' => 250,
                'rooms' => 7,
                'bedrooms' => 4,
                'floor' => 2,
                'price' => 750000,
                'city' => 'Abidjan Riviera',
                'address' => '24 Avenue des Jardins, Riviera',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Studio cosy au centre-ville',
                'description' => 'Petit studio de 35m² parfaitement situé au centre-ville, idéal pour étudiant ou jeune actif.',
                'surface' => 35,
                'rooms' => 2,
                'bedrooms' => 1,
                'floor' => 3,
                'price' => 85000,
                'city' => 'Abidjan Plateau',
                'address' => '5 Rue de l\'Université, Plateau',
                'postal_code' => '00225',
                'sold' => true,
            ],
            [
                'title' => 'Maison traditionnelle avec grand jardin',
                'description' => 'Maison de 180m² avec 3 chambres et un grand jardin arboré. Calme et sécurisé.',
                'surface' => 180,
                'rooms' => 6,
                'bedrooms' => 3,
                'floor' => 1,
                'price' => 420000,
                'city' => 'Abidjan Marcory',
                'address' => '10 Rue des Fleurs, Marcory',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Penthouse avec terrasse panoramique',
                'description' => 'Penthouse de 150m² avec terrasse offrant une vue imprenable sur la ville. Moderne et lumineux.',
                'surface' => 150,
                'rooms' => 5,
                'bedrooms' => 3,
                'floor' => 8,
                'price' => 650000,
                'city' => 'Abidjan Plateau',
                'address' => '18 Boulevard de la République, Plateau',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Appartement lumineux avec balcon',
                'description' => 'Appartement de 90m², 3 chambres, lumineux et bien situé. Parfait pour couple ou petite famille.',
                'surface' => 90,
                'rooms' => 4,
                'bedrooms' => 3,
                'floor' => 2,
                'price' => 220000,
                'city' => 'Abidjan Treichville',
                'address' => '7 Rue des Palmiers, Treichville',
                'postal_code' => '00225',
                'sold' => true,
            ],
            [
                'title' => 'Maison familiale avec garage',
                'description' => 'Maison de 200m² avec 4 chambres, garage et jardin clos. Quartier calme et sécurisé.',
                'surface' => 200,
                'rooms' => 6,
                'bedrooms' => 4,
                'floor' => 2,
                'price' => 500000,
                'city' => 'Abidjan Yopougon',
                'address' => '33 Rue des Acacias, Yopougon',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Studio moderne proche commerces',
                'description' => 'Studio de 40m² moderne et fonctionnel, proche des commerces et transports.',
                'surface' => 40,
                'rooms' => 2,
                'bedrooms' => 1,
                'floor' => 1,
                'price' => 90000,
                'city' => 'Abidjan Plateau',
                'address' => '12 Rue du Commerce, Plateau',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Villa de luxe avec piscine et jardin',
                'description' => 'Villa de 300m² avec piscine, jardin paysager et 5 chambres. Design moderne.',
                'surface' => 300,
                'rooms' => 8,
                'bedrooms' => 5,
                'floor' => 2,
                'price' => 950000,
                'city' => 'Abidjan Riviera',
                'address' => '45 Avenue des Palmiers, Riviera',
                'postal_code' => '00225',
                'sold' => false,
            ],
            [
                'title' => 'Appartement contemporain avec balcon',
                'description' => 'Appartement de 100m² avec 3 chambres et balcon. Proche des commerces et écoles.',
                'surface' => 100,
                'rooms' => 4,
                'bedrooms' => 3,
                'floor' => 3,
                'price' => 280000,
                'city' => 'Abidjan Cocody',
                'address' => '9 Rue des Hibiscus, Cocody',
                'postal_code' => '00225',
                'sold' => true,
            ],
        ];

        DB::table('properties')->insert($properties);
    }
}
