<?php

$games = array(
    "lucky" => (
        new Game("lucky-platformer", "a RNG based platforming game"))
            ->display_name("Lucky Platformer")
            ->image("assets/thumb.png")
            ->visible(true)
);