// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі



let time = 0;

function beginDay(isBeginDay) {
    return new Promise((resolve, reject)=> {

        setTimeout(()=>{
            if (isBeginDay){
                time = 7;
                resolve(time)
            }
        }, 600);
    })
}

function wakeup(time) {
    return new Promise((resolve, reject)=> {

        setTimeout(()=>{
            if (time<7 || time>7){
                console.log('Щось я промахався');
                reject('ooopppsss!!!!')
            } else {
                time += 1;
                resolve(time)
            }
        }, 1000);
    })
}

function teeth(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<8 || time>8){
                console.log('too early for teeth');
                reject('Нема зубів))')
            }else {
                time += 1
                resolve(time)
            }
        }, 800);
    })
}

function eat(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<9 || time>9){
                console.log('too early to eat');
                reject('Не хочу їсти')
            }else {
                time += 1;
                resolve(time)
            }
        }, 1300);
    })
}

function work(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<10 || time>10){
                console.log('too early for work');
                reject('Піду завтра')
            }else {
                time += 1;
                resolve(time)
            }
        }, 900);
    })
}

function working(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<11 || time>11){
                console.log('working');
                reject('Сьогодні не мій день')
            }else {
                time += 8;
                resolve(time)
            }
        }, 2500);
    })
}

function returnHome(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<19 || time>19){
                console.log('working');
                reject('Не працював')
            }else {
                time += 1;
                resolve(time)
            }
        }, 900);
    })
}

function inHome(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<20 || time>20){
                console.log('in home');
                reject('Маю інші справи')
            }else {
                time += 1;
                resolve(time)
            }
        }, 800);
    })
}

function readBooks(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<21 || time>21){
                console.log('reading');
                reject('Не буду читати')
            }else {
                time += 1;
                resolve(time)
            }
        }, 1100);
    })
}

function goSleep(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<22 || time>22){
                console.log('go to sleep');
                reject('Не час спати')
            }else {
                time += 1;
                resolve(time)
            }
        }, 800);
    })
}

function sleeping(time) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (time<23 || time>23){
                console.log('go to sleep');
                reject('Піду прогуляюсь')
            }else {
                time -= 16;
                resolve(time)
            }
        }, 500);
    })
}



// beginDay(true)
//     .then(time => {
//         console.log('Початок дня о', time, 'годині')
//         return wakeup(time);
//     })
//     .then(timeAfter => {
//         console.log('Прокинувся, встаю до', timeAfter,'години');
//         return teeth(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Чищу зуби о', timeAfter,'годині');
//         return eat(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Йду їсти о', timeAfter,'годині');
//         return work(timeAfter);
//     })
//     .then(timeAfter => {
//         console.log('Йду на роботу о', timeAfter, 'годині');
//         return working(timeAfter);
//     })
//     .then(timeAfter => {
//         console.log('Працюю до', timeAfter, 'години');
//         return returnHome(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Повертаюсь додому о', timeAfter, 'годині');
//         return inHome(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Приймаю душ до', timeAfter, 'години');
//         return readBooks(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Читаю книги до', timeAfter, 'години');
//         return goSleep(timeAfter);
//
//     })
//     .then(timeAfter => {
//         console.log('Намагаюсь заснути до', timeAfter, 'години');
//         return sleeping(timeAfter)
//
//
//     })
//     .then(timeAfter => {
//         console.log('Сон до', timeAfter, 'години ранку');
//
//     })


async function routine() {
    const time = await beginDay (true);
    console.log('Початок дня о', time, 'годині')

    const timeAfter = await wakeup(time);
    console.log('Прокинувся, встаю до', timeAfter,'години');

    const getUp = await teeth(timeAfter);
    console.log('Чищу зуби о', getUp,'годині');

    const eating = await eat(getUp);
    console.log('Йду їсти о', eating,'годині');

    const goWork = await work(eating);
    console.log('Йду на роботу о', goWork, 'годині');

    const work1 = await working(goWork);
    console.log('Працюю до', work1, 'години');

    const home = await returnHome(work1);
    console.log('Повертаюсь додому о', home, 'годині');

    const shower = await inHome(home);
    console.log('Приймаю душ до', shower, 'години');

    const book = await readBooks(shower);
    console.log('Читаю книги до', book, 'години');

    const go = await goSleep(book);
    console.log('Намагаюсь заснути до', go, 'години');

    const sleep = await sleeping(go);
    console.log('Сон до', sleep, 'години ранку');

}
routine();



