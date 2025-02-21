<?php

namespace Database\Factories\Public\Blog;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Public\Blog\BlogMetaData>
 */
class BlogMetaDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => $this->faker->sentence(3),
            'description' => $this->faker->sentence(10),
            "image" => "https://picsum.photos/1920/1080?random=" . $this->faker->randomNumber(4, true),
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
