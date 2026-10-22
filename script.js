function beginStory() {
    document.body.classList.add("page-transition");

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 900);
}


/* =========================
   BIRTHDAY MUSIC
========================= */

const birthdayMusic = document.getElementById("birthdayMusic");
const birthdayMusicBtn = document.getElementById("birthdayMusicBtn");

let birthdayMusicStopped = false;


/* Set volume */

birthdayMusic.volume = 0.65;


/* =========================
   TRY AUTOPLAY
========================= */

window.addEventListener("load", () => {

    birthdayMusic.play()
        .then(() => {
            birthdayMusicBtn.textContent = "♫";
        })
        .catch(() => {
            /*
            Browser blocked autoplay.
            Music will start after
            the first user interaction.
            */

            birthdayMusicBtn.textContent = "♪";
        });

});


/* =========================
   PLAY / PAUSE INDICATOR
========================= */

birthdayMusic.addEventListener("play", () => {
    birthdayMusicBtn.textContent = "♫";
});

birthdayMusic.addEventListener("pause", () => {
    birthdayMusicBtn.textContent = "♪";
});


/* =========================
   MUSIC BUTTON
========================= */

birthdayMusicBtn.addEventListener("click", (event) => {

    /*
    Prevent the music button from
    triggering anything underneath it.
    */

    event.preventDefault();
    event.stopPropagation();


    if (birthdayMusic.paused) {

        birthdayMusicStopped = false;

        birthdayMusic.play()
            .catch(() => {});

    } else {

        birthdayMusicStopped = true;

        birthdayMusic.pause();

    }

});