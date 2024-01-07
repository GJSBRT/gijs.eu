<?php

namespace Gijs\Http\Controllers\Public;

use Illuminate\Routing\Controller;

use Gijs\Models\Guide;

class GuideController extends Controller
{
    public function index() {
        $guides = Guide::all();

        return inertia('Guides', [
            'guides' => $guides
        ]);
    }  

    public function view(string $guide) {
        $guide = Guide::where('slug', $guide)->firstOrFail();

        return inertia('Guides/View', [
            'guide' => $guide
        ]);
    }  
}
