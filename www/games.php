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

<main class="container">
    <h1>Games</h1>
    <div class="card-deck">
        <?php
        include("gamecard.php");

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