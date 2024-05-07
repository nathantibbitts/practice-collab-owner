//Foobar
const input = document.getElementById("input")
const title = document.getElementById("title")
const year = document.getElementById("year")
const plot = document.getElementById("plot-text")
const actors = document.getElementById("actors")
const apiKey = "5b2e277e"
document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault()
    MovieId = input.value
    fetchMovie(MovieId)
})
async function fetchMovie(movieID) {
    if(/^ev\d{7}\/\d{4}(-\d)?$|^(ch|co|ev|nm|tt)\d{7}$/.test(movieID)){
        var url = "http://www.omdbapi.com/?apikey=" + apiKey + '&i=' + movieID
    }else{
        var url = "http://www.omdbapi.com/?apikey=" + apiKey + '&t=' + movieID;
    }
    
    const response = await fetch(url)
    result = await response.json()
    title.innerText = result.Title
    year.innerText = "Year: " + result.Year
    plot.innerText = result.Plot
    actors.innerText = result.Actors
    console.log(result)
}
