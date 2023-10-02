let tablinks= document.getElementsByClassName('tab-links');
let tabcontent= document.getElementsByClassName('tab-content');
function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");

    }
    for(tabcontent of tabcontent){
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemenu=document.getElementById('menu');

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-100%";
    
}