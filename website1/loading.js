const loadText = document.querySelector('.loading-text')
const bg = doucment.querySelector
let load = 0
loadText.innerText = "80&"
let int = setInterval(blurring,300)
function blurring()
{
    load = load++
    if (load > 99)
        {
            clearInterval(int)
        }
    loadText.innerText = `${load}%`
}

