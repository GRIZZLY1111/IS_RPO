//создание массива ссылок
let arr = ['img/one.jfif', 'img/two.jfif', 'img/three.jfif', 'img/four.jfif']
let index = 0;
//подключение к картинкам
let img = document.getElementById("cartinca")

let iamge = document.getElementById("image")
//функция для движения вперед по слайдеру
function next(){
    //удаление анимации из класса
    image.classList.remove('animate')
    //проверка на последний слайд
    if(index == arr.length-1){
        index=0;
    }
    else{
        index=index+1;
    }
    //изменение картимнки
    img.src = arr[index];
    //добавление анимации
    requestAnimationFrame(()=>{
        image.classList.add('animate')
    })
}
//функция для движения назад по слайдеру
function prew(){
    //удаление анимации из класса
    image.classList.remove('animate')
    //добавление анимации
    requestAnimationFrame(()=>{
        image.classList.add('animate')
    })
    //проверка на первый слайд
    if(index == 0){
        index=3;
    }
    else{
        index=index-1;
    }
    //изменение картимнки
    img.src = arr[index];
}