<?php

use Inertia\Inertia; 
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});

require __DIR__.'/recipes.php';
require __DIR__.'/guides.php';
