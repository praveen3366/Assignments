
function getRestCountries(param, countryData, getWeatherData) {
    var tags = '';
    var count = 1;
    var divRow = document.createElement('div');
    for (var i = 0; i < param.length; i++) {

        divRow.setAttribute('class', 'row');
        var divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-3');
        tags = `
            <div class="card card-custom">
                <div class="card-header">
                   ${count}). ${param[i].name}
                </div>
                <img src="${param[i].flag}" id="${param[i].alpha2Code}" class="card-img-top cust-card-img" alt="${param[i].name}">
                <div class="card-body card-body-custom-css">
                    <p class="card-text">
                        Capital: <span class="badge badge-success"> ${param[i].capital} </span><br>
                        Country Codes: <span class="badge "> ${param[i].alpha2Code}, ${param[i].alpha3Code}</span><br>
                        Region: <span class="badge "> ${param[i].region}</span>
                    </p>
                </div>
                <div class="card-footer text-muted text-center">
                <button class="btn btn-sm btn-info" data-toggle="alert" id="whoData" onclick="${getWeatherData}('${param[i].capital}','${param[i].alpha2Code}','${param[i].name}')">View Current Weather</button>
            </div>
            </div>
            `;
        count++;
        divCol.innerHTML = tags;
        divRow.appendChild(divCol);
        countryData.appendChild(divRow);
    }
}

getCountries = () => {
    var url = 'https://restcountries.eu/rest/v2/all';
    var countryData = document.getElementById('country-data');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            getRestCountries(data, countryData, 'getWeatherFetchData');
        })
        .catch(err => {
            console.log("Error:", err);
        });
}

getCountries();


function getWeather(value, code, country) {
    var urlValues = '';
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
    var weatherAPIKey = '&appid=c3b4ef31feb237ca322297881c170281';
    var weatherMetric = '&units=metric';
    urlValues += weatherURL + value + ',' + code + weatherAPIKey + weatherMetric

    fetch(urlValues)
        .then(res => res.json())
        .then((data) => {
            alert('You selected Country: ' + country + ' with capital ' + data.name + ' and Temperature(in celsius) ' + data.main.temp);
        }).catch((err) => {
            alert("Couldn't find data for the selected country, Try again!");
        
        });

}

var asyncawait = async() => {

    var url = 'https://restcountries.eu/rest/v2/all';
    var countryData = document.getElementById('country-data-await');
    try {
        var response = await fetch(url);
        var data = await response.json();
        getRestCountries(data, countryData, 'getWeatherAwaitData');
    } catch (error) {
        console.log("Error:", error);
    }
}


async function WeatherAwait(value, code, country) {
    var urlValues = '';
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
    var weatherAPIKey = '&appid=c3b4ef31feb237ca322297881c170281';
    var weatherMetric = '&units=metric';
    urlValues += weatherURL + value + ',' + code + weatherAPIKey + weatherMetric

    try {
        let response = await fetch(urlValues);
        let data = await response.json();
        alert('You selected Country: ' + country + ' with capital ' + data.name + ' and Temperature(in celsius) ' + data.main.temp);
    } catch (error) {
        alert("Couldn't find data for the selected country, Try again!");
        console.log("Error:", error);
    }

}

asyncawait();


var Imdb = async() => {
    try {
        var searchText = document.getElementById('search').value;
        console.log(searchText);
        var url = `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${searchText}&apikey=e9d1a1c3`
        var response = await fetch(url);
        var data = await response.json();
        console.log(data);
        if (data != null && data.Response != 'False') {
            var imdbMovieCard = `
            <div class="col-12 col-md-6 imdb-card">
            
            <div class="card card-custom">
            <div class="card-header text-center">
               ${data.Title}
            </div>
            <img src="${data.Poster || ''}" id="imdb-image" class="card-img-top cust-card-img" alt="no results image">
            <div class="card-body ">
                <p class="card-text">
                    IMDB RATING: <span class="badge badge-success"> ${data.imdbRating} </span><br>
                    Language: <span class="badge "> ${data.Language}</span><br>
                    Genre: <span class="badge "> ${data.Genre}</span>
                </p>
            </div>
        </div>
            </div>
            
            `;

            document.getElementById('imdb-data').innerHTML = imdbMovieCard;
        } else {

            document.getElementById('imdb-data').innerHTML = '';
            throw data.Error;
        }

    } catch (error) {
        alert(`Error! No data found! ${error}`)
        console.log("Error:", error);
    }

}