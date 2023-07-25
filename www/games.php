<?php
include("./.main/head.php");
include("./.data/games.php");
?>

<body>
    <?php
    include("./.comps/header.php")
        ?>
    <main>
        <h1>Games</h1>
        <ul>
            <li>put game list here</p>
            <li>
                <p>
                    <?php var_dump(parse_games()) ?>
                </p>
            </li>
        </ul>
    </main>
</body>

</html>