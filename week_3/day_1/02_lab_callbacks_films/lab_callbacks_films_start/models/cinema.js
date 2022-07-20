// const Cinema = function (films) {
//   this.films = films;
// };

// Cinema.prototype.filmsTitles = function () {
//   return this.films.map((film) => {
//     return film.title;
//   })
// }

// module.exports = Cinema;


//  Jacobs Solution 

class Cinema {
  films

  constructor(films) {
    this.films = films;
  }

  get_names() {
    let titles = [];

    this.films.forEach(film => {
      titles.push(film.title)
    })
    return titles
  }

  get_film_by_title(title) {
    return this.films.find(film => {
      return film.title == title
    })
  }

  get_films_by_genre(genre) {
    return this.films.filter(film => {
      return film.genre == genre
    })
  }

  get_films_by_year(year) {
    return this.films.filter(film => {
      return film.year == year
    })
  }

  get_films_larger_length(length) {
    return this.films.filter(film => {
      return film.length >= length
    })
  }
};

module.exports = Cinema;