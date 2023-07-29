<?php

function navbar_item(string $name, string $url)
{
    // check if active
    $req_url = $_SERVER["REQUEST_URI"];
    $active = strrpos($req_url, $url);

    $classes = "nav-link";
    if ($active !== false) {
        $classes .= " active";
    }

    $aria = "";
    if ($active !== false) {
        $aria = 'aria-current="page"';
    }

    echo '
        <li class="nav-item">
            <a class="' . $classes . '"' . $aria . ' href="' . $url . '">' . $name . '</a>
        </li>';
}
?>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a href="/" class="navbar-brand">
            <img width=40 height=40 src="/assets/logo.png" alt="logo" />
            Doomhowl Interactive
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <?php navbar_item("Home","/index.php") ?>
                <?php navbar_item("Contact","/contact.php") ?>
                <?php navbar_item("Games","/games.php") ?>
            </ul>
        </div>
    </div>
</nav>