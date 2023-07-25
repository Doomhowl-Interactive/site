<?php
include("./.main/head.php");
include("./.data/gamestore.php");
include("./.comps/gamecard.php");

function get_game_list_items(): string
{
    $games = parse_games();
    $items = "";

    foreach ($games as $gameName => $gameDetails) {
        $items .= render_game_card($gameName, $gameDetails);
    }

    return $items;
}

?>

<body>
    <?php
    include("./.comps/header.php")
        ?>
    <main>
        <h1>Games</h1>
        <ul>
            <li>put game list here</li>

            <?php echo get_game_list_items() ?>

            <li>
                <p>
                    <?php var_dump(parse_games()) ?>
                </p>
            </li>
        </ul>
    </main>
</body>

</html>