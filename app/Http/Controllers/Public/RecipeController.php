<?php

namespace Gijs\Http\Controllers\Public;

use Illuminate\Routing\Controller;

use Gijs\Models\Recipe;

class RecipeController extends Controller
{
    public function index() {
        $recipes = Recipe::all();

        return inertia('Recipes', [
            'recipes' => $recipes
        ]);
    }  

    public function view(string $recipe) {
        $recipe = Recipe::where('slug', $recipe)->firstOrFail();

        return inertia('Recipes/View', [
            'recipe' => $recipe
        ]);
    }  
}
