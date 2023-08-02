"use strict";

let _$buttonForwards = null;
let _$buttonBackwards = null;

let $slideIndex = 0;
let $slides = [];

function indexSlides() {
    $slides = document.querySelectorAll(".slideshow-item");
}

function refresh() {
    // Update the slideshow navigation buttons
    _$buttonBackwards.classList.toggle("hidden", $slideIndex === 0);
    _$buttonForwards.classList.toggle(
        "hidden",
        $slideIndex === $slides.length - 1
    );

    // Hide all slides except the one we want to show
    $slides.forEach((slide, index) => {
        slide.classList.toggle("hidden", index !== $slideIndex);
        slide.classList.toggle("active", index === $slideIndex);
    });

    // Update the slideshow indicators
    const indicators = document.querySelectorAll(".slideshow-indicator");
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === $slideIndex);
    });
}

function navigateForwards() {
    $slideIndex++;
    if ($slideIndex >= $slides.length) {
        $slideIndex = $slides.length - 1;
    } else {
        console.debug("Navigating forwards");
        refresh();
    }
}

function navigateBackwards() {
    console.debug("Navigating backwards");
    $slideIndex--;
    if ($slideIndex < 0) {
        $slideIndex = 0;
    } else {
        console.debug("Navigating backwards");
        refresh();
    }
}

function showSlideshowButtons() {
    const slideshowButtons = document.querySelectorAll(".slideshow-button");
    slideshowButtons.forEach((button) => {
        button.classList.remove("hidden");
    });
    document.querySelector(".slideshow-indicators").classList.remove("hidden");
}

function linkSlideshowButtons() {
    _$buttonForwards.addEventListener("click", navigateForwards);
    _$buttonBackwards.addEventListener("click", navigateBackwards);

    // Link the slideshow indicators
    const indicators = document.querySelectorAll(".slideshow-indicator");
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            $slideIndex = index;
            refresh();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    _$buttonForwards = document.querySelector(".slideshow-button.right");
    _$buttonBackwards = document.querySelector(".slideshow-button.left");

    showSlideshowButtons();
    linkSlideshowButtons();

    indexSlides();
    refresh();
    console.log("Configured slideshow buttons");
});
