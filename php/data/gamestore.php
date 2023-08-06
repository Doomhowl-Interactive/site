<?php

$space_typer =

$games = array(
    "space-typer" =>
        (new Game("space-typer", "A fun space-themed typing game!"))
            ->display_name("Space Typer")
            ->image("assets/thumb.png")
            ->state("in-dev")
            ->visible(true)
            ->featured(),
    "lucky-platformer" =>
        (new Game("lucky-platformer", "a RNG based platforming game"))
            ->display_name("Lucky Platformer")
            ->image("assets/thumb.png")
            ->visible(false),
    "blasteroids" =>
        (new Game("blasteroids", "An 'Asteroids' clone with multiple theming options!"))
            ->display_name("Blasteroids!")
            ->image("assets/thumb.png")
            ->visible(true)
            ->state("in-dev")
            ->featured(),
);