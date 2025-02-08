<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userQuery = "INSERT INTO users (name, email, password) VALUES ";

        $min = 400000;
        $max = 500000;

        for ($i = $min; $i < $max; $i++) {
            $name = "User $i";
            $email = "user$i@gmail.com";
            $password = "password$i";

            echo "Inserting user $i\n";

            if ($i > $min) {
                $userQuery .= ", ";
            }
            $userQuery .= "('$name', '$email', '$password')";
        }
        $userQuery .= ";";

        DB::insert($userQuery);
    }
}
