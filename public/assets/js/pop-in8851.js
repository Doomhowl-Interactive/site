"use strict";

function countChars(str, ch="/"){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }
    return count;
}

function recordCurrentPage(){
    // keep track of seen pages
    const seen = sessionStorage.getItem("seen") || "[]";
    try {
        const pages = JSON.parse(seen);

        // main pages don't get recorded
        if (countChars(window.location.pathname, "/") === 1) {
            return;
        }

        pages.push(window.location.pathname);
        const pagesSet = new Set(pages);
        sessionStorage.setItem("seen", JSON.stringify(Array.from(pagesSet)));
    } catch (e) {
        console.log("(Re)initializing the seen pages list");
        sessionStorage.setItem("seen", JSON.stringify([window.location.pathname]));
    }
}

function hasSeenPage(){
    const seen = sessionStorage.getItem("seen") || "[]";
    try {
        const pages = JSON.parse(seen);
        return pages.includes(window.location.pathname);
    }
    catch (e) {
        console.error("Unable to parse seen pages list");
        return false;
    }
}

function showPopupAnimation(){
    const observer = new IntersectionObserver((elems) => {
        elems.forEach(elem => {
            if (elem.isIntersecting) {
                setTimeout(() => {
                    elem.target.classList.add("show");
                }, elem.boundingClientRect.y / 2);
            }
        });
    });

    const elems = document.querySelectorAll("main > *");
    elems.forEach((elem) => {
        elem.classList.add("pop-in");
        observer.observe(elem);
    });
    console.debug(`Popping in ${elems.length} elements`);
}

// pop in the main elements of each page
document.addEventListener("DOMContentLoaded", () => {
    const option = document.body.dataset["popIn"];
    if (option === undefined || option === true) {
        if (!hasSeenPage()) {
            showPopupAnimation();
        }
        recordCurrentPage();
    }
});