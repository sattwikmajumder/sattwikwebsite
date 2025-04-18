const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = sound;  // Fixed typo (was innerHTLM)

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}
