import data from './data/data.js'

// TODO Challenge 1
document.getElementById("subtitle").innerHTML = "FEW 2.5: Muhammed Constantino";

// TODO Challenge 2
document.getElementById("info-name").innerHTML = "Name: World Happiness Report";
document.getElementById("info-year").innerHTML = "Year: 2019";
document.getElementById("info-countries").innerHTML = `Number of Countries: ${data.length}`;

// TODO Challenge 3 

document.getElementById("gdpbtn").addEventListener("click", function(){sortData('gdp');});
document.getElementById("supportbtn").addEventListener("click", function(){sortData('support');});
document.getElementById("healthbtn").addEventListener("click", function(){sortData('health');});
document.getElementById("genbtn").addEventListener("click", function(){sortData('generosity');});

function sortData(category) {
    data.sort((a,b) => {
        if(a.category > b.category) {
            return -1
        } else if (a.category < b.category) {
            return 1
        }
        return 0
    })

    displayTable(data, category)
}



function displayTable(data, mcategory) {
    document.getElementById('bycategory').innerHTML = "";

    const bycategory = document.querySelector('#bycategory')

    data.slice(0, 10).map(country => {
        var main = document.createElement('div')
        main.setAttribute("id", "country-data")

        var name = document.createElement('div')
        name.setAttribute("id", "name")

        var score = document.createElement('div')
        score.setAttribute("id", "score")

        var category = document.createElement('div')
        category.setAttribute("id", "category")

        name.innerHTML = country.country
        score.innerHTML = country.score
        category.innerHTML = country[mcategory]
        // category.innerText = country.gdp


        // console.log(country[gdp])
        main.appendChild(name)
        main.appendChild(score)
        main.appendChild(category)
        bycategory.appendChild(main)
    })

    var element = document.getElementById("bycategory");
    var para = document.createElement('span')

    var main = document.createElement('div')
    main.setAttribute("id", "country-data")

    var name = document.createElement('div')
    name.setAttribute("id", "name")

    var score = document.createElement('div')
    score.setAttribute("id", "score")

    var category = document.createElement('div')
    category.setAttribute("id", "category")

    name.innerHTML = "Name"
    score.innerHTML = "Score"
    category.innerHTML = `${mcategory}`
    // category.innerText = country.gdp


    // console.log(country[gdp])
    main.appendChild(name)
    main.appendChild(score)
    main.appendChild(category)

    element.insertBefore(main, element.firstChild);

}



  
// TODO Challenge 4