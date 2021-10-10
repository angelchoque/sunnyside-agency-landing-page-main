const navBarButton = document.querySelector('#navbar-button')
const navBarList = document.querySelector('.navbar-list')
navBarButton.addEventListener('click',(e)=>{
    navBarList.classList.toggle('active')
})
// const lineHover = document.querySelectorAll('.link-learn-more-container > a')
// lineHover.forEach((item)=>{

//     item.addEventListener('mouseover',(e)=>{
//         console.log(e)
//         // console.log(lineHover)
//     })
// })
const lineHover = document.querySelector('.link-learn-more-container > a')

// const underlinetext = document.querySelector('.underline-text-transform-brand')
lineHover.addEventListener('mouseover', e => {
    console.log('aaa')
    document.querySelector('.underline-text-transform-brand').classList.toggle('active')
    e.stopPropagation()
})