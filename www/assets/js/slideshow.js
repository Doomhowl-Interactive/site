"use strict";

let _$buttonForwards = null;
let _$buttonBackwards = null;

let $slideIndex = 0;
let $slides = [];

function indexSlides() {
    $slides = document.querySelectorAll(".slideshow-item");
}

function refresh() {
    _$buttonBackwards.classList.toggle("hidden", $slideIndex === 0);
    _$buttonForwards.classList.toggle(
        "hidden",
        $slideIndex === $slides.length - 1
    );

    $slides.forEach((slide, index) => {
        slide.classList.toggle("hidden", index !== $slideIndex);
        slide.classList.toggle("active", index === $slideIndex);
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
}

function linkSlideshowButtons() {
    _$buttonForwards.addEventListener("click", navigateForwards);
    _$buttonBackwards.addEventListener("click", navigateBackwards);
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
