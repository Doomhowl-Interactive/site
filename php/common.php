<?php

// add php script folder to include path
$script_folder = "/var/www/php";
set_include_path(get_include_path() . PATH_SEPARATOR . $script_folder);

include_once('head.php');

include_once('comps/gamecard.php');
include_once('comps/header.php');
include_once('comps/slideshow.php');

include_once('data/gamestore.php');
?>