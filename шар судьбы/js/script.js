let res = 0;
let otv = document.getElementById("p");
let c = document.getElementById("circle")
let mas = ["Да", "Очень вероятно", "Безусловно", "Без сомнений", "Должно быть так", "Абсолютно точно", "Мне кажется, да", "Духи говорят да", "Ответ пока не определен", "Не спрашивай снова", "Невозможно сказать сейчас", "Нет", "Плохие шансы", "Не рассчитывай на это", "Не стоит олагаться на это"]
function otvet(){
    c.classList.remove('animation');

    res = Math.floor(Math.random()*mas.length);
    otv.textContent=mas[res];
   
    requestAnimationFrame(() => {
        c.classList.add('animation');

    } );
}