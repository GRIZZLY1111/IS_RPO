const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const number = document.querySelector('.number');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const special = document.querySelector('#special');
const digital = document.querySelector('#digital');
const dlina = document.querySelector('#dlina');

dlina.addEventListener('input',()=>{
    number.textContent = dlina.value;
})

btn.addEventListener('click',()=>{
    let chars ='';
    let password='';
    if(up.checked){
        chars+='QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if(down.checked){
        chars+='qwertyuiopasdfghjklzxcvbnm'
    }
    if(special.checked){
        chars+='~`!@#$%^&*()_-+={[}]:;|?/.,№'
    }
    if(digital.checked){
        chars+='1234567890'
    }
    if(chars==''){
        text.textContent = 'Нет условий'
    }
    else{
        for(let i=0; i<dlina.value; i++){
            password += (chars[(Math.floor(Math.random()*chars.length))])
        }
        text.textContent = password;
    }
})