function solve(input) {

    let movies = [];

    for (let command of input) {
        let tokens = command.split(" ");

        if (tokens[0] == "addMovie") {
            let filmName = tokens.slice(1).join(" ");
            movies.push({
                name: filmName
            });
        } else if (tokens.includes("directedBy")) {
            let directedByIndex = tokens.indexOf("directedBy");
            let filmName = tokens.slice(0, directedByIndex).join(" ");

            const film = movies.find((o) => o.name === filmName);

            if (film) {
                let directorName = tokens.slice(directedByIndex + 1).join(" ");
                film.director = directorName;
            }
        } else if (tokens.includes('onDate')) {
            let onDateIndex = tokens.indexOf("onDate");
            let filmName = tokens.slice(0, onDateIndex).join(" ");

            const film = movies.find((o) => o.name === filmName);

            if (film) {
                film.date = tokens.slice(onDateIndex + 1).join(" ");
            }
        }
    }

    const filteredMovies = movies.filter((movie) => Object.keys(movie).length === 3);
    for (let film of filteredMovies) {
        console.log(JSON.stringify(film));
    }
}