const btn = document.querySelector('.btn');
const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const hobby = document.querySelector('#hobby');
const age = document.querySelector('#age');
const result = document.querySelector('#result');

btn.addEventListener('click', ()=>{
    let parts = [];
    if(lastname.value < 3){
        alert("Заполните поле Фамилия");
        return;
    }
    if(firstname.value < 3){
        alert("Заполните поле Имя");
        return;
    }
    if(hobby.value == "n"){
        alert("Выберите хобби");
        return;
    }
    
    if(age.value == ""){
        alert("Заполните поле Возраст");
        return;
    }
    parts.push(lastname.value.slice(0,3));
    parts.push(firstname.value.charAt(Math.floor(Math.random()*firstname.value.length)))
    parts.push(hobby.value);
    parts.push(age.value);

    parts = shuffle(parts);
    result.value = parts.join('');
})

const shuffle = (array)=>{
    for(let i =array.length -1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]]=[array[j], array[i]];
    }
    return array;
}
const button = document.querySelector('.button');
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

button.addEventListener('click',()=>{
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