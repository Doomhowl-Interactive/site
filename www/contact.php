<?php
include_once("/var/www/php/common.php");

function link_email(string $em)
{
    $link = "mailto:" . $em;
    return "<a href=" . $link . ">" . $em . "</a>";
}

?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<?php include_once("head.php") ?>

<body>
    <?php include_once("navbar.php") ?>
    <?php include_once("preamble.php") ?>
    <main class="container">
        <h1>Contact</h1>
        <p>For business enquiries, questions and technical problems</p>
        <p>Email:
            <?php echo link_email("contact@doomhowl-interactive.com") ?>
        </p>
    </main>
</body>

</html>