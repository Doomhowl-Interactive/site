<?php
include("/var/www/php/common.php");

global $games;

function slide(Game $slide)
{
    $full_img = "/games/" . $slide->name . "/" . $slide->images[0];
    echo <<<HTML
        <div class="slideshow-item">
            <img draggable="false" src="$full_img" alt="$slide->name">
            <div class="slideshow-description">
                <h3>{$slide->title}</h3>
                <p>{$slide->description}</p>
                <a href="/games/{$slide->name}" class="btn btn-primary">Play</a>
            </div>
            
        </div>
HTML;
}

?>

<link rel="stylesheet" href="/assets/css/slideshow.css">
<div class="slideshow">
    <div class="slideshow-inner">
        <?php
        foreach ($games as $game) {
            if ($game->visible && $game->featured) {
                slide($game);
            }
        }
        ?>
    </div>
</div>
