import data from './data/data.js'

// TODO Challenge 1
document.getElementById("subtitle").innerHTML = "FEW 2.5: Muhammed Constantino";

// TODO Challenge 2
document.getElementById("info-name").innerHTML = "Name: World Happiness Report";
document.getElementById("info-year").innerHTML = "Year: 2019";
document.getElementById("info-countries").innerHTML = `Number of Countries: ${data.length}`;

// TODO Challenge 3

data.sort((a,b) => {
    if(a.gdp > b.gdp) {
        return -1
    } else if (a.gdp < b.gdp) {
        return 1
    }
    return 0
})

console.log(data)

const bygdp = document.querySelector('#bygdp')

const bygdpcountries = data.slice(0, 10).map(country => {
    var main = document.createElement('div')
    main.setAttribute("id", "country-data")
    var country = document.createElement('div')
    country.setAttribute("id", "country")
    var score = document.createElement('div')
    var category = document.createElement('div')

    category.innerText = country.corruption
    console.log(country[gdp])
    main.appendChild(country)
    main.appendChild(score)
    main.appendChild(category)
	bygdp.appendChild(main)
})


  
// TODO Challenge 4