<?php
include("/var/www/php/common.php");

function link_email(string $em)
{
    $link = "mailto:" . $em;
    return "<a href=" . $link . ">" . $em . "</a>";
}

?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<?php include("head.php") ?>

<body>
    <?php include("navbar.php") ?>
    <?php include("preamble.php") ?>
    <main>
        <h1>Contact</h1>
        <p>Email:
            <?php echo link_email("contact@doomhowl-interactive.com") ?>
        </p>
    </main>
</body>

</html>