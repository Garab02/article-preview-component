const popup = document.getElementById('pop-up');
const clickBtn = document.getElementsByClassName('.open-button');
const btn = document.getElementById('btn');


popup.style.display = 'none';


let isOpen = false;

btn.addEventListener('click',()=>{
    isOpen = !isOpen;
    if(isOpen){
        popup.style.display = 'flex';
    }else{
        popup.style.display = 'none';
    }
});