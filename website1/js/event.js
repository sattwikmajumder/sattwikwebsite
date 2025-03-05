doucment.addEventListener('keyup',(event)=>
    {
        console.log(event.key)

        if(event.key == 'ArrowDown')
            {
                positionY = positionY + 10
            }
            element3
    })


    element4.addEventListener('click',()=>)
    {
        element4.style.width = "10px"
        element4.style.height = "10px"
        element4.innerHTML = " "
        element4.style.opacity = .3



    }

const list = ['running', 'paused']
let index = 0
element5.addEventListener('click',()=>{
    element5.style.animationPlayState = list[index]
    index = (index + 1)%2
})
