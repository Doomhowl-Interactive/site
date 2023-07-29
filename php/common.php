<?php

// add php script folders to include path
$script_folders = array("/var/www/php", "/var/www/php/data", "/var/www/php/comps", "/var/www/php/comps/alerts");
set_include_path(get_include_path() . PATH_SEPARATOR . implode(PATH_SEPARATOR, $script_folders));

include_once("types.php");
include_once("gamestore.php");
