import data from './data/data.js'

// Challenge 1
document.getElementById("subtitle").innerHTML = "FEW 2.5: Muhammed Constantino";

// Challenge 2
document.getElementById("info-name").innerHTML = "Name: World Happiness Report";
document.getElementById("info-year").innerHTML = "Year: 2019";
document.getElementById("info-countries").innerHTML = `Number of Countries: ${data.length}`;

// Challenge 3 

document.getElementById("happiestbtn").addEventListener("click", function(){sortData('score');});
document.getElementById("gdpbtn").addEventListener("click", function(){sortData('gdp');});
document.getElementById("supportbtn").addEventListener("click", function(){sortData('support');});
document.getElementById("healthbtn").addEventListener("click", function(){sortData('health');});
document.getElementById("genbtn").addEventListener("click", function(){sortData('generosity');});

function sortData(category) {
    var newdata = data.sort((a,b) => {
        // if(a.category > b.category) {
        //     return -1
        // } else if (a.category < b.category) {
        //     return 1
        // }
        // return 0
        return b[category] - a[category]
    })

    displayTable(newdata, category)
    displayGraph(category)
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

function displayGraph(mcategory) {
    document.getElementById('bycategorygraph').innerHTML = "";

    var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#bycategorygraph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    d3.json("./data/data.json", function(data) {

        // sort data
        data.sort(function(b, a) {
            return a[mcategory] - b[mcategory];
        });

        // X axis
        var x = d3.scaleBand()
            .range([ 0, width ])
            .domain(data.slice(0,10).map(function(d) { return d.country; }))
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 10])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data.slice(0,10))
            .enter()
            .append("rect")
            .attr("x", function(d) { return x(d.country); })
            .attr("y", function(d) { return y(d[mcategory]); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d[mcategory]); })
            .attr("fill", "#69b3a2")

        })
}