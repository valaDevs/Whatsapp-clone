'use strict'

function addTab(evt ,  tabName){
    let i , tab , link

    tab = document.getElementsByClassName('tabcontent')
    for(i = 0 ; i < tab.length; i++){
        tab[i].style.display = "none"
    }
    link = document.getElementsByClassName('tablinks')
    for(i = 0 ; i < link.length; i++ ){
        link[i].className = link[i].className.replace(' active' , "")
    }
    document.getElementById(tabName).style.display = "block"
    evt.currentTarget.className += " active"
}
let cam = document.querySelector('.fa-camera')
cam.addEventListener('click' , () => {
    window.confirm('Coded in vanilla js and font-awesome - amovala :)')
})

let menuBtn = document.querySelector('.fa-ellipsis-v')
let menu = document.querySelector('.menu')
menu.style.display = "none"
menuBtn.addEventListener('click' , () => {
    if(menu.style.display === "none"){
        menu.style.display = "block"
    }
    else{
        menu.style.display = "none"
    }
})

// valaDevs - coded in vanilla