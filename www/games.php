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

<main>
    <h1>Games</h1>
    <ul>
        <li>put game list here</li>
        <?php
        include("gamecard.php");

        global $games;
        foreach ($games as $game) {
            gamecard($game);
        }
        ?>
        <li>
            <p>
                <?php var_dump($games) ?>
            </p>
        </li>
    </ul>
</main>
</body>

</html>