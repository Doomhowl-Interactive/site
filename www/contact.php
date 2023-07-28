<?php
include("./.lib/common.php");

function linkEmail(string $em)
{
    $link = "mailto:" . $em;
    return "<a href=" . $link . ">" . $em . "</a>";
}

?>

<body>
    <main>
        <h1>Contact</h1>
        <p>Email:
            <?php echo linkEmail("support@doomhowl-interactive.com") ?>
        </p>
    </main>
</body>

</html>