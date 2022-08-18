let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', '').trim();
              b = prompt('На сколько его оцените?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30){
        consolelog("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();

const newArr = []

    const movie1 = 'TERMINATOR 30000'
    const movie2 = 'Titanik'
    const movie3 = 'Отчаянные домохозяйки'

    newArr.push(movie1, movie2, movie3)

    newArr.map(film => {
        console.log(film)
    })
    