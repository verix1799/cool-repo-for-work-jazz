const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', () => {
    assert.deepStrictEqual(
      ["Moonlight", "Blade Runner 2049", "Dunkirk",
        "Black Panther", "T2 Trainspotting"
      ],
      cinema.get_names()
    )
  });
  it('should be able to find a film by title', () => {
    assert.deepStrictEqual(
      cinema.get_film_by_title(bladeRunner.title),
      bladeRunner
    )

  });
  it('should be able to filter films by genre', () => {
    assert.deepStrictEqual(
      cinema.get_films_by_genre("sci-fi"),
      [bladeRunner]
    )
  });
  it('should be able to check whether there are some films from a particular year', () => {
    assert.deepStrictEqual(
      cinema.get_films_by_year(blackPanther.year),
      [blackPanther]
    )
  });
  it('should be able to check whether there are no films from a particular year',
    () => {
      assert.deepStrictEqual(
        cinema.get_films_by_year(1984),
        []
      )
    });
  it('should be able to check whether all films are over a particular length', () => {
    assert.deepStrictEqual(
      cinema.get_films_larger_length(10).length,
      cinema.films.length
    )
  });
  it('should be able to calculate total running time of all films', () => {
    assert.deepStrictEqual(
      cinema.films.reduce((ac, value) => {
        return ac + value.length
      }, 1, cinema.films[0].length),
      623
    )
  });
});

// // Task-1
// const searchingMovieByTitle = (filmsArray, targetToFind) => {
//   var targetFound = '';
//   filmsArray.forEach((titleElements, index) => {
//     if (titleElements === targetToFind) {
//       targetFound = 'Taget has found at positon, ' + index;

//     }

//   })

//   return targetFound
// }

// // Task-2 



// // Task-3
// films.forEach(number, index, array => {
//   console.log(array)
// });