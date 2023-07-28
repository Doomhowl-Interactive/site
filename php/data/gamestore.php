<?php

function parse_games(): mixed
{
    $path = "/var/www/php/data/games.json";
    $file = fopen($path, "r");
    $contents = fread($file, filesize($path));
    fclose($file);

    return json_decode($contents, true);
}

?>