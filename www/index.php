<?php
include("/var/www/php/common.php");
?>

<body>
    <main class="welcome">
        <div className="title-header">
            <h2>Doomhowl Interactive</h2>
            <h1>Solo developer's game studio</h1>
        </div>
        <div class=" game-slideshow">
            <?php echo render_slideshow(); ?>
        </div>
    </main>
</body>

</html>