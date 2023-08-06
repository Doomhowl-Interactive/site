<?php
global $games;
include_once("/var/www/php/common.php");
?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<?php include_once("head.php") ?>

<body>
<?php include_once("navbar.php") ?>
<?php include_once("preamble.php") ?>

<main class="container">
    <h1>Games</h1>
    <div class="card-deck">
        <?php
        include_once("gamecard.php");

        global $games;
        foreach ($games as $game) {
            if ($game->visible) {
                gamecard($game);
            }
        }
        ?>
    </div>
</main>
</body>

</html>