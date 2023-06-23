<?php
function includeNoComments(String $filename)
{
    $file = fopen($filename . ".php", "r");
    while (!feof($file)) {
        $line = fgets($file);
        // no html comments
        if (!preg_match("/<!--/", $line)) {
            echo $line;
        }
    }
    fclose($file);
}
