<?php
include("/var/www/php/common.php");

global $games;

function slide(Game $slide)
{
    $full_img = "/games/" . $slide->name . "/" . $slide->images[0];
    echo <<<HTML
        <div class="carousel-item">
            <img src="$full_img" alt="$slide->name">
        </div>
HTML;
}

?>

<div class="game-slideshow carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <?php
        $i = 0;
        foreach ($games as $game) {
            $class = "";
            if ($i == 0) {
                $class = "active";
            }
            echo <<<HTML
            <li data-target="#carouselExampleIndicators" data-slide-to="{$i}" class="{$class}"></li>
HTML;
            $i++;
        }
        ?>
    </ol>
    <div class="carousel-inner">
        <?php
        foreach ($games as $game) {
            if ($game->visible && $game->featured) {
                slide($game);
            }
        }
        ?>
    </div>
</div>
