const btn = document.querySelector('.lang');
let state = true;
const textRus = `
        <div class="up">
            <div class="logo">ЮристПро</div>
            <nav class="menu_nav">
                <a href="#">Услуги</a>
                <a href="#">Юристы</a>
                <a href="#">Консультация</a>
            </nav>
                <div class="menu_link">
                    <a href="#"><img src="img/vk.png" alt="viewport"></a>
                    <a href="#"><img src="img/ok.png" alt="OK"></a>
                    <a href="#"><img src="img/MAX.png" alt="MAX"></a>
                </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">Выбор лучших компаний</p>
                <h1 class="content_title">Ваш <span>надежный</span> парнтер в мире бизнеса</h1>
                <p class="content_desc">Комплексные юридические решения для роста и защиты вашего бизнеса - от стартапов до крупных корпораций</p>
            </div>
            <form action="#" class="content_form">
                <div class="form_content">
                    <h2 class="form_title">Запишитесь на консультацию прямо сейчас</h2>
                    <div class="form_item">
                        <input type="text" placeholder="Введите ваше ФИО">
                        <input type="text" placeholder="Введите ваш номер телефона">
                        <input type="text" placeholder="Введите ваш электроный адрес">
                    </div>
                    <button class="form_btn">Записаться</button>
                </div>
            </form>
        </div>
    `

const textEng = `
        <div class="up">
            <div class="logo">UrologPro</div>
            <nav class="menu_nav">
                <a href="#">Services</a>
                <a href="#">Urolog</a>
                <a href="#">Cospiration</a>
            </nav>
                <div class="menu_link">
                    <a href="#"><img src="img/vk.png" alt="viewport"></a>
                    <a href="#"><img src="img/ok.png" alt="OK"></a>
                    <a href="#"><img src="img/MAX.png" alt="MAX"></a>
                </div>
        </div>
        <div class="content">
            <div class="content_text">
                <p class="content_slogan">best company</p>
                <h1 class="content_title">partner busines</h1>
                <p class="content_desc">Urolog services</p>
            </div>
            <form action="#" class="content_form">
                <div class="form_content">
                    <h2 class="form_title">add urolog</h2>
                    <div class="form_item">
                        <input type="text" placeholder="FIO">
                        <input type="text" placeholder="Your Phome">
                        <input type="text" placeholder="Your E-mail">
                    </div>
                    <button class="form_btn">Add</button>
                </div>
            </form>
        </div>
    `;
btn.addEventListener('click', ()=>{
    if(state ){
        btn.children[0].src = "img/rus.png"
        document.querySelector('main').innerHTML = textEng
    }
    else{
        btn.children[0].src= "img/grb.png"
        document.querySelector('main').innerHTML = textRus
    }
    state=!state;
})