<?php

use Illuminate\Support\Facades\Route;

use Gijs\Http\Controllers\Public\RecipeController;

Route::prefix('recipes')->group(function () {
    Route::get('/', [RecipeController::class, 'index'])->name('public.recipes.index');
    Route::get('/{recipe}', [RecipeController::class, 'view'])->name('public.recipes.view');
});
