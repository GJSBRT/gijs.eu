<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="Personal website, gijs.eu, gijsbert" />
    <meta name="publisher" content="Gijsbert"/>
    <meta name="description" content="My personal website. A gateway to many of my experiments"/>
    <meta property="og:type" content="website"/>
    <title>gijs.eu</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script defer data-domain="gijs.eu" src="https://plausible.dutchis.net/js/script.js"></script>
    @inertiaHead
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
</head>

<body class="dark:bg-gray-950 bg-gray-50 transition-colors">
    @inertia
    <script>
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    </script>
</body>

</html>