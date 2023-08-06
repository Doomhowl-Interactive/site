<?php
include("/var/www/php/common.php");

global $games;

function slide_btn_text(Game $game)
{
    if ($game->is_downloadable()) {
        return "Download";
    } else if ($game->state == "in-dev") {
        return "Read more";
    } else {
        return "Play";
    }
}

function slide(Game $slide, $first = false)
{
    $full_img = "/games/" . $slide->name . "/" . $slide->images[0];
    $btn_text = slide_btn_text($slide);
    $classes = ["slideshow-item"];
    if ($first) {
        $classes[] = "active";
    }
    $class_name = implode(" ", $classes);
    $in_dev = $slide->state == "in-dev";
    echo <<<HTML
        <div class="$class_name">
            <div class="slideshow-image">
                <img draggable="false" src="$full_img" alt="$slide->name">
            </div>
            <div class="slideshow-description">
                <h3>{$slide->display_name}</h3>
                <p>{$slide->description}</p>
                <a href="/games/{$slide->name}" class="btn btn-primary">{$btn_text}</a>
HTML;
    if ($in_dev) {
        echo <<<HTML
                <span class="indev">⚠️ In development</span>
HTML;
    }
    echo <<<HTML
</div>
        </div>
HTML;
}

$item_count = 0;
?>

<link rel="stylesheet" href="/assets/css/slideshow.css">
<div class="slideshow">
    <div class="slideshow-inner">
        <?php
        foreach ($games as $game) {
            if ($game->visible && $game->featured) {
                slide($game, $item_count == 0);
                $item_count++;
            }
        }
        ?>
    </div>
    <div class="slideshow-button left hidden">
    </div>
    <div class="slideshow-button right hidden">
    </div>
    <div class="slideshow-indicators hidden">
        <?php
        for ($i = 0; $i < $item_count; $i++) {
            $class_name = "slideshow-indicator";
            if ($i == 0) {
                $class_name .= " active";
            }
            echo <<<HTML
                <div class="$class_name"></div>
HTML;
        }
        ?>
    </div>
    <script src=" /assets/js/slideshow.js">
    </script>
</div>