(function () {

   
    document.querySelectorAll(".contenedor-album").forEach(album => {

        const pages = album.querySelectorAll(".page");
        const nextBtn = album.querySelector(".next-btn");
        const prevBtn = album.querySelector(".prev-btn");
        let current = 0;

        nextBtn.onclick = () => {
            if (current < pages.length) {
                pages[current].classList.add("flip");
                current++;
            }
        };

        prevBtn.onclick = () => {
            if (current > 0) {
                current--;
                pages[current].classList.remove("flip");
            }
        };

    });

})();





const music = document.getElementById("music");
const btn = document.getElementById("music-btn");
let playing = false;

btn.onclick = () => {
    if (!playing) {
        music.play();
        btn.textContent = "⏸ Pausar";
        playing = true;
    } else {
        music.pause();
        btn.textContent = " Reproducir música";
        playing = false;
    }
};
