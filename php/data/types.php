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
    public array $images;
    public string $desc;
    public string $state;
    public bool $visible;
    // download links
    public ?string $windows;
    public ?string $linux;
    public ?string $mac;

    public array $extra_links;
    public bool $adult;
    public function __construct(string $name, string $desc) {
        $this->name = $name;
        $this->desc = $desc;
        $this->images = array();
        $this->state = "released";
        $this->visible = true;

        $this->windows = null;
        $this->linux = null;
        $this->mac = null;

        $this->extra_links = array();
        $this->adult = false;
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
}
