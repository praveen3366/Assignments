var url = 'https://restcountries.eu/rest/v2/all';
    var countryData = document.getElementById('country-data');
    fetch(url)
        .then(res => res.json())
        .then(data => {getRestCountries(data);})
        .catch(err => {console.log("Error:", err);});
    
    function getRestCountries(param) {
        var tags = '';
        var count = 1;
        var divRow = document.createElement('div');
        for (var i = 0; i < param.length; i++) {
            
            divRow.setAttribute('class', 'row');
            var divCol = document.createElement('div');
            divCol.setAttribute('class', 'col-sm-4 col-md-4 col-lg-3 col-xl-3 mt-3');
            tags = `
                <div class="card card-custom">
                    <div class="card-header">
                       ${count}). ${param[i].name}
                    </div>
                    <img src="${param[i].flag}" id="${param[i].alpha2Code}" class="card-img-top cust-card-img" alt="${param[i].name}">
                    <div class="card-body">
                        <p class="card-text">
                            Capital: <span class="badge badge-success"> ${param[i].capital} </span><br>
                            Country Codes: <span class="badge "> ${param[i].alpha2Code}, ${param[i].alpha3Code}</span><br>
                            Region: <span class="badge "> ${param[i].region}</span>
                        </p>
                    </div>
                </div>
                `;
            count++;
            divCol.innerHTML = tags;
            divRow.appendChild(divCol);
            countryData.appendChild(divRow);
        }
    }
