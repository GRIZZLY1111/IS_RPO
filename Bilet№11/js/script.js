const btn = document.querySelectorAll('.btn');
const result = document.querySelector('.game_container');
const score = document.querySelector('.score');
const btn_rock = document.querySelector('.btn_rock');
const btn_scissors = document.querySelector('.btn_scissors');
const btn_paper = document.querySelector('.btn_paper');
const choice = ['✊🏿','✌🏿','✋🏿'];
let computer = 0;
let people = 0;

btn.forEach(item =>{
    item.addEventListener('click', ()=>{
        console.log(item);
        let randomchoice = choice[Math.floor(Math.random()*choice.length)];
        const combinate = item.textContent+randomchoice;

        switch(combinate){
            case '✊🏿✌🏿':
            case '✌🏿✋🏿':
            case '✋🏿✊🏿':
                result.innerHTML = `
                <p>Победа</p>
                <p>Вы выбрали ${item.textContent}, Компьютер выбрал ${randomchoice}</p>`;
                people++;
                score.innerHTML = `
                <p>Вы выиграли ${people} раз, Компьютер выиграл ${computer}</p>`;
                break;
            case '✊🏿✋🏿':
            case '✌🏿✊🏿':
            case '✋🏿✌🏿':
                result.innerHTML = `
                <p>Поражение</p>
                <p>Вы выбрали ${item.textContent}, Компьютер выбрал ${randomchoice}</p>`;
                computer++;
                score.innerHTML = `
                <p>Вы выиграли ${people} раз, Компьютер выиграл ${computer} раз</p>`;
                break;
            default :
                result.innerHTML = `
                <p>Ничья</p>
                <p>Вы выбрали ${item.textContent}, Компьютер выбрал ${randomchoice}</p>`;
                score.innerHTML = `
                <p>Вы выиграли ${people} раз, Компьютер выиграл ${computer} раз</p>`;
                break;
            } 
        if(people==3 || computer==3){
            if(people>computer){
            score.innerHTML = `
                <h1 >Победа</h1>
                <p>Вы выиграли ${people} разa, Компьютер выиграл ${computer} раза</p>`;
            }
            if(people<computer){
            score.innerHTML = `
                <h1>Поражение</h1>
                <p>Вы выиграли ${people} разa, Компьютер выиграл ${computer} раза</p>
                <p>Повезет в следующий раз</p>`;
            }
            btn_rock.disabled = true;
            btn_scissors.disabled = true;
            btn_paper.disabled = true;
            setTimeout(() =>{
                window.location.reload();
            }, 3000)
        }  
    })
})