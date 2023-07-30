<?php
global $games;
include("/var/www/php/common.php");
?>

    <!DOCTYPE html>
    <html lang="en" data-bs-theme="dark">
    <?php include("head.php") ?>

    <body>
    <?php include("navbar.php") ?>
    <?php include("preamble.php") ?>

    <?php
    $game = $games["space-typer"];
    ?>

    <main class="container">
        <h1>Space Typer</h1>
        <?php
        if ($game->visible) {
            include ".content.php";
        } else {
            include "unavailable.php";
        }
        ?>
    </main>
    </body>

    </html>
<?php
