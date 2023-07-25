<?php
// Sample record of names and URLs
$record = array(
    array('name' => 'Home', 'url' => 'index.php'),
    array('name' => 'Contact', 'url' => 'contact.php')
);

// Function to generate Bootstrap navbar list items
function generateNavbarItems(array $record): string
{
    $items = '';

    foreach ($record as $item) {

        // check if active
        $url = $_SERVER["REQUEST_URI"];
        $active = strrpos($url, $item['url']);

        $classes = "nav-link";
        if ($active !== false) {
            $classes .= " active";
        }

        $aria = "";
        if ($active !== false) {
            $aria = 'aria-current="page"';
        }

        $items .= '
        <li class="nav-item">
            <a class="' . $classes . '"' . $aria . ' href="' . $item['url'] . '">' . $item['name'] . '</a>
        </li>';
    }
    return $items;
}
?>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a href="/" class="navbar-brand">
            <img width=40 height=40 src="/assets/logo.png" alt="logo" />
            Doomhowl Interactive
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <?php echo generateNavbarItems($record); ?>
            </ul>
        </div>
    </div>
</nav>