//создаем переменную для подключения кнопки
let genBtn = document.querySelector('.gen_btn');
//создаем переменную для подключения текста пароля
let genPass = document.querySelector('.text');
//создаем переменную для подключения скрол-бара
let genRange = document.querySelector('#range');
//создаем переменную для подключения чекбокса на верхний регистр
let genUpper = document.querySelector('#upper');
//создаем переменную для подключения чекбокса на нижний регистр
let genDown = document.querySelector('#down');
//создаем переменную для подключения чекбокса на цифры
let genDigital = document.querySelector('#digital');
//создаем переменную для подключения чекбокса на специальные символы
let genSpecial = document.querySelector('#special');
//создаем переменную для возможных символов пароля
let chars = '';
//создаем переменную для пароля
let password = '';
//создаем событие на клик по кнопке
genBtn.addEventListener('click', () => {
    //присваиваем переменным нулевые значения
    chars='';
    password='';
    //проверяем на чекбоксы на галочку и добавляем символы для пароля
    if(genUpper.checked) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(genDown.checked) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(genDigital.checked) {
        chars += '0123456789';
    }
    if(genSpecial.checked) {
        chars += '~`!@#$%^&*()_+=-?/,:;№.';
    }
    //проверяем на пустоту переменную
    if(chars==''){
        genPass.textContent='Не выбрано ни одно условие';
    }
    else{
        //с помощью рандом выбираем символы из нашего сборника
        for(let i =0; i<genRange.value; i++){
            password += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        //присваиваем полученный пароль переменной для вывода на экран
        genPass.textContent = password;
    }
})
