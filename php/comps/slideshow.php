<?php
include("../.data/gamestore.php");

function render_slideshow(): string
{
    $games = parse_games("../.data/games.json");

    $html = "";
    foreach ($games as $gameName => $gameDetails) {
        $html .= render_game_card($gameName, $gameDetails);
    }

    return $html;
}

?>