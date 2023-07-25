<?php
include("./.main/head.php");
include("./.comps/slideshow.php");
?>

<body>
    <?php
    include("./.comps/header.php")
        ?>
    <main class="welcome">
        <div>
            <h2>Doomhowl Interactive</h2>
            <h1>Solo developer's game studio</h1>
        </div>
        <div class="game-slideshow">
            <?php echo renderSlideshow(); ?>
        </div>
    </main>
</body>

</html>