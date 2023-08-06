<?php
// HACK: Prevents browser caching of critical assets by appending a random id to the end of the asset path.
function dynamic_asset(string $path): string
{
    // generate randow id of 4 characters
    $id = substr(md5(rand()), 0, 4);
    return $path . "?" . $id;
}

function link_dynamic_css(string $path)
{
    $url = "/assets/css/" . dynamic_asset($path);
    echo "<link rel=\"stylesheet\" href=\"$url\">";
}