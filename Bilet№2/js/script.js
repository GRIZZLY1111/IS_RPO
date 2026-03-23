const leftbtn = document.querySelector('.left_btn');
const rightbtn = document.querySelector('.right_btn');

const items = (document.querySelectorAll('img')).length - 1;

let i =0;

leftbtn.addEventListener('click', () =>{
    if (i!=0){
        i=i-1;
        document.querySelector('.carousel').style.transform = `translateX(${-100 *i}%)`;
    }
    else{
        document.querySelector('.carousel').style.transform = `translateX(-201%)`;
        i=items;
    }
})

rightbtn.addEventListener('click', () =>{
    if (i!=items){
        i=i+1;
        document.querySelector('.carousel').style.transform = `translateX(${-100 *i}%)`;
    }
    else{
        document.querySelector('.carousel').style.transform = `translateX(0%)`;
        i=0;
    }
})