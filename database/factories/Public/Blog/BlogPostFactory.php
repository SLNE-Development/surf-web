<?php

namespace Database\Factories\Public\Blog;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Public\Blog\BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "slug" => $this->faker->slug,
            "permalink" => $this->faker->randomNumber(9, true),
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->sentence(10),
            "blog_type" => $this->faker->randomElement(["RELEASE", "UPDATE", "EVENT", "TUTORIAL", "ANNOUNCEMENT", "DEVLOG"]),
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
