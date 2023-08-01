<?php

class Link {
    public string $name;
    public string $url;
    public function __construct(string $name, string $url) {
        $this->name = $name;
        $this->url = $url;
    }
}

class Game {
    public string $name;
    public string $display_name;
    public array $images;
    public string $description;
    public string $state;
    public bool $visible;
    public bool $featured;

    // download links
    public ?string $windows;
    public ?string $linux;
    public ?string $mac;

    public array $extra_links;
    public bool $adult;
    public function __construct(string $name, string $description) {
        $this->name = $name;
        $this->display_name = $name;
        $this->description = $description;
        $this->images = array();
        $this->state = "released";
        $this->visible = true;
        $this->featured = false;

        $this->windows = null;
        $this->linux = null;
        $this->mac = null;

        $this->extra_links = array();
        $this->adult = false;
    }

    public function display_name(string $display_name): Game {
        $this->display_name = $display_name;
        return $this;
    }

    public function image(string $path): Game {
        $this->images[] = $path;
        return $this;
    }

    public function link(string $name, string $url): Game {
        $link = new Link($name, $url);
        $this->extra_links[] = $link;
        return $this;
    }

    public function visible(bool $visible): Game {
        $this->visible = $visible;
        return $this;
    }

    public function featured(): Game {
        $this->featured = true;
        return $this;
    }

    public function state(string $state): Game {
        $this->state = $state;
        return $this;
    }

    public function adult(): Game {
        $this->adult = true;
        return $this;
    }
}
