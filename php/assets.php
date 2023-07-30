<?php

// HACK: Prevents browser caching of critical assets
function dynamic_asset(string $path): string
{
    // generate randow id of 4 characters
    $id = substr(md5(rand()), 0, 4);
    return $path . "?" . $id;
}