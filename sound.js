const sounds = ['applause,' 'wrong']

sounds.forEach(sound => {
    const btn = doucment.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound
    btn.addEventListener('click',()=>{
        doucment.getElementById(sound).play()
    })

    doucment.getElementById('buttons').appendChild(btn)
})
