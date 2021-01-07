window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#cloud1_container").classList.add("flyv");
    document.querySelector("#cloud2_container").classList.add("flyv2");
    document.querySelector("#cloud3_container").classList.add("flyv3");
    document.querySelector("#game_ui").classList.add("scale");
}
