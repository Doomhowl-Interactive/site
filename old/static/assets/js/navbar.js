"use strict";

function setupNavbar() {

    const nav = document.querySelector("main[data-nav]");
    if (!nav) {
        console.warn("No nav target");
        return;
    }

    const navTarget = nav.dataset.nav;
    
    const ul = document.querySelector(".navbar ul.navbar-nav");
    if (!ul) {
        return;
    }

    for (const li of ul.querySelectorAll("li.nav-item")) {
        if (li.innerText.toLowerCase() === navTarget.toLowerCase()) {
            const a = li.querySelector("a");
            a.classList.add("active");
            break;
        }
    }
}

setupNavbar();
