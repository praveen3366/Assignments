var Movie = /** @class */ (function () {
    function Movie(t, s, r) {
        if (r === void 0) { r = "PG"; }
        this.rating = r;
        this.studio = s;
        this.title = t;
    }
    Movie.prototype.get = function (PG) {
        var List = [];
        var check;
        PG.forEach(function (movie) {
            check = movie.rating;
            if (check.include("PG"))
                List.push(movie);
        });
        console.log(List);
    };
    return Movie;
}());
var movie = [new Movie('Casino Royale', 'Eon Productions', 'PG-13'),
    new Movie('Infinity War', 'Marvel', 'PG-13'),
    new Movie('Assasin"s Creed', 'Marvel', 'R'),];
var data = new Movie('Casino Royale', 'Eon Productions', 'PG­13');
data.get(movie);
