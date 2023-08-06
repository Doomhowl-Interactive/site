<?php
include_once("/var/www/php/common.php");
?>
<head>
    <title>Doomhowl Interactive</title>
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
    </script>

    <?php
    include_once("assets.php");

    link_dynamic_css("pop-in.css");
    link_dynamic_script("pop-in.js");

    $url = dynamic_asset("/assets/css/style.css");
    echo <<<HTML
        <!-- Link custom CSS -->
        <link rel="stylesheet" href="{$url}">
HTML;
    ?>
</head>