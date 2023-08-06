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

<?php
$game = $games["lucky-platformer"];
?>

<main class="container">
    <h1>Lucky Platformer</h1>
    <?php
    if ($game->visible) {
        include_once ".content.php";
    } else {
        include_once "unavailable.php";
    }
    ?>
</main>
</body>

</html>
