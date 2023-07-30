<?php

function border_class(Game $game): string
{
    if ($game->adult) {
        return "border-danger";
    } else if ($game->state == "in-dev") {
        return "border-warning";
    } else {
        return "";
    }
}

function card_footer(Game $game)
{
    $text = array();
    if ($game->adult) {
        $text[] = "🔞 Adult Content";
    }

    if ($game->state == "in-dev") {
        $text[] = "⚠️ In Development";
    }

    if (count($text) > 0) {
        echo <<<HTML
        <div class="card-footer">
HTML;
        foreach ($text as $line) {
            echo <<<HTML
            <small class="text-muted">{$line}</small>
HTML;
        }
        echo <<<HTML
        </div>
HTML;
    }


}

function gamecard(Game $game)
{
    $content_href = "/games/" . $game->name;
    $img_src = "/games/" . $game->name . "/" . $game->images[0];
    $classes = "card game-card " . border_class($game);

    echo <<<HTML
    <a class="{$classes}" href="{$content_href}">
        <img draggable="false" src="{$img_src}" class="card-img-top" title="{$game->display_name}" alt="{$img_src}">
        <div class="card-body">
            <h3 class="card-title">{$game->display_name}</h3>
            <p class="card-text">{$game->description}</p>
HTML;
    card_footer($game);
    echo <<<HTML
        </div>
    </a>
HTML;
}

