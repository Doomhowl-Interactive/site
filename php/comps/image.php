<?php
function image(string $path, string $alt = "", string $class = "")
{
    echo <<<HTML
    <figure>
        <a href="$path" target="_blank">
            <img draggable="false" src="$path" alt="$alt" class="$class">
        </a>
        <figcaption>$alt</figcaption>
    </figure>
HTML;
}