<?php
include_once("/var/www/php/common.php");
include_once("image.php");
?>

<div class="container">
    <div class="alert alert-info">
        <h3>ℹ️ Notice</h3>
        <p>Blasteroids is being rewritten for the web and will be available here shortly.</p>
    </div>
</div>

<h2>An <em>Asteroids</em> clone with multiple theming options!</h2>

<h3>How to play:</h3>

<ul>

<li>Aim mouse cursor to steer</li>
<li>Hold left mouse button to shoot</li>
<li>Hold space to thrust forwards</li>
<li>Lots of color themes available in the settings menu!</li>

</ul>

<h3>Screenshots</h3>

<?php
    image("assets/screenshot1.png", "Gameplay");
    image("assets/screenshot2.png", "Main menu");
?>