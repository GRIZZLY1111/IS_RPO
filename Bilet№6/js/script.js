const btn = document.querySelector('.btn');

const fromValue = document.querySelector('#from_value')
const toValue = document.querySelector('#to_value')

const result = document.querySelector('.result');
const number = document.querySelector('#number')

btn.addEventListener('click', ()=>{
    if(!parseInt(number.value))
        {
            alert("Введите значение которые вы хотите перевести!");
    }
    else{
        result.textContent = `${funcResult(fromValue.value, toValue.value)}`
    }
})

const funcResult=(from,to)=>{
    switch(from+"->"+to){
        case "m->in" : return number.value / 0.0254;
        case "in->m" : return number.value * 0.0254;
        case "m->ft" : return number.value / 0.3048;
        case "ft->m" : return number.value * 0.3048;
        case "m->yd" : return number.value / 0.9144;
        case "yd->m" : return number.value * 0.9144;
        case "m->mi" : return number.value / 1609.344;
        case "mi->m" : return number.value * 1609.344;
        case "in->ft" : return number.value / 12;
        case "ft->in" : return number.value * 12;
        case "in->yd" : return number.value / 36;
        case "yd->in" : return number.value * 36;
        case "in->mi" : return number.value / 63360;
        case "mi->in" : return number.value * 63360;
        case "ft->yd" : return number.value / 3;
        case "yd->ft" : return number.value * 3;
        case "ft->mi" : return number.value / 5280;
        case "mi->ft" : return number.value * 5280;
        case "yd->mi" : return number.value / 1760;
        case "mi->yd" : return number.value * 1760;
        case "m->m" : return number.value;
        case "in->in" : return number.value;
        case "ft->ft" : return number.value;
        case "yd->yd" : return number.value;
        case "mi->mi" : return number.value;
    }
}