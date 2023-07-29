<?php

function gamecard(Game $game)
{
    $content_href = "/games/" . $game->name;
    $img_src = "/games/" . $game->name . "/" . $game->images[0];

    echo <<<HTML
<div class="col-md-4">
    <a class="card" href="{$content_href}">
        <img draggable="false" src="{$img_src}" class="card-img-top" title="{$game->display_name}" alt="{$img_src}">
        <div class="card-body">
            <h3 class="card-title">{$game->display_name}</h3>
            <p class="card-text">{$game->description}</p>
        </div>
    </a>
</div>
HTML;

}

