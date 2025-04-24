<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('users')->insert([
            'nombre_completo' => 'Usuario Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('12345678'), // Encripta la contraseña
            'activo' => true
        ]);
    }
}
