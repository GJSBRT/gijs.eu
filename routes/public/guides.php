<?php

use Illuminate\Support\Facades\Route;

use Gijs\Http\Controllers\Public\GuideController;

Route::prefix('guides')->group(function () {
    Route::get('/', [GuideController::class, 'index'])->name('public.guides.index');
    Route::get('/{guide}', [GuideController::class, 'view'])->name('public.guides.view');
});
