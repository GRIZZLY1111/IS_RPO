const btn = document.querySelector('.result_btn');
const num = document.querySelector('#num');
const result = document.querySelector('.result');
const score =document.querySelector('.score');

const n = Math.floor(Math.random()*100);
let count = 0;

btn.addEventListener('click', ()=>{
    if(num.value==n){
        result.innerHTML = "Поздравляем";
        btn.disabled = true;
        setTimeout(() =>{
                window.location.reload();
            }, 3000)
    }else{
        let i = Math.abs(n -num.value);
        switch(true){
            case i > 60 && i <= 100 : result.innerHTML = "Мороз"; result.style.color=`blue`; break;
            case i > 40 && i <= 60 : result.innerHTML = "Холодно"; result.style.color=`aqua`; break;
            case i > 20 && i <= 40 : result.innerHTML = "Тепло"; result.style.color=`yellow`; break;
            case i > 10 && i <= 20 : result.innerHTML = "Горячо";result.style.color=`orange`; break;
            case i > 0 && i <= 10 : result.innerHTML = "Горим"; result.style.color=`red`;break;
        }
    }
    count++;
    score.innerHTML=`${count} попыток`;
    if(count >14){
        result.innerHTML="Вы проиграли";
        btn.disabled = true;
        setTimeout(() =>{
                window.location.reload();
            }, 3000)
    }
})