// let name = "Kamila";
// // ` ё
// alert(`Привет, ${name}!`);
// let element = document.getElementById('el1');
// console.log(element);
// добавляем класс элементу
// element.classList.add('active');
// удалить класс
// element.classList.remove('active');

let count = 0;

function clickHead() {
    let element = document.getElementById('a1');
    if (count % 2 == 0) element.classList.add('active'), element.textContent = "Это МЕЙН-КУН!";
    else element.classList.remove('active'), element.textContent = "Что за зверь?"
    
    // count % 2 == 0 ? element.classList.add('active') : element.classList.remove('active');
    count++;
    // element.classList.contains('active');
    // element.classList.toggle('active');
    // element.textContent = "Это МЕЙН-КУН!";
}let btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click', clickHead);


function clickText() {
    let element = document.getElementById('a2');
    if (count % 2 == 0) element.classList.add('description'), element.textContent = "Описание породы";
    else element.classList.remove('description'), element.textContent = 'Одной из самых удивительных и загадочных пород считается мейн-кун – ласковый гигант с серьезным взглядом. Этих созданий называют «комнатными рысями», что неудивительно, т.к. они одни из самых крупных домашних кошек.'
    count++;
}
let btn2 = document.getElementsByClassName('ice');
btn2[0].addEventListener('click', clickText);
console.log(btn2);


function clickList() {
    let ul = document.getElementById('a3');
    let collection = ul.getElementsByTagName("li");
    for (li of collection){
        count % 2 == 0 ? ul.classList.add('listColor') : ul.classList.remove('listColor');
    }
        count++;
    }
       
let btn3 = document.getElementsByClassName('ice');
btn2[1].addEventListener('click', clickList);
console.log(btn3);