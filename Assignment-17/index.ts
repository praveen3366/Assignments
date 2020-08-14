class Movie {
    title : string;
    studio : string;
    rating : string;

    constructor(t :string, s :string, r :string = "PG"){
        this.rating = r;
        this.studio = s;
        this.title = t;
       
       
    }
    get(PG){
        let List = [];
        let check;
        PG.forEach(movie => {
            check=movie.rating;
            if(check.include("PG"))
            List.push(movie);
        });
        console.log(List);
    }
}
let movie = [new Movie('Casino Royale','Eon Productions','PG-13'),
    new Movie('Infinity War','Marvel','PG-13'),
    new Movie('Assasin"s Creed','Marvel','R'),]
let data = new Movie('Casino Royale','Eon Productions','PG­13');
data.get(movie);