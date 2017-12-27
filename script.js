// source: CIA World FactBook: https://www.cia.gov/library/publications/the-world-factbook/rankorder/rankorderguide.html

const dataset = [
  ["Albania",78.5,11800,29,"Europe"  ],
  ["Algeria",77,15000,35.3,"North Africa"  ],
  ["American Samoa",73.4,13000,35.3,"Oceania"  ],
  ["Andorra",82.9,49900,35.3,"Europe"  ],
  ["Angola",60.2,6800,35.3,"Sub-Saharan Africa"  ],
  ["Anguilla",81.5,12200,35.3,"Caribbean Islands"  ],
  ["Antigua and Barbuda",76.7,25200,35.3,"Caribbean Islands"  ],
  ["Argentina",77.3,20000,42.7,"South America"  ],
  ["Armenia",74.9,8600,31.5,"West & Central Asia"  ],
  ["Aruba",76.9,25300,31.5,"Caribbean Islands"  ],
  ["Australia",82.3,48900,30.3,"Oceania"  ],
  ["Austria",81.6,48000,29.2,"Europe"  ],
  ["Azerbaijan",72.8,17400,33.7,"West & Central Asia"  ],
  ["Bahamas, The",72.6,24600,33.7,"Caribbean Islands"  ],
  ["Bahrain",79,50700,33.7,"West & Central Asia"  ],
  ["Bangladesh",73.4,3900,32.1,"South & South East Asia"  ],
  ["Barbados",75.5,17100,32.1,"Caribbean Islands"  ],
  ["Belarus",73,18000,26.5,"North Asia"  ],
  ["Belgium",81.1,45000,25.9,"Europe"  ],
  ["Belize",68.9,8200,25.9,"Mesoamerica"  ],
  ["Benin",62.3,2100,36.5,"Sub-Saharan Africa"  ],
  ["Bermuda",81.4,85700,36.5,"Caribbean Islands"  ],
  ["Bhutan",70.6,8200,38.8,"South & South East Asia"  ],
  ["Bolivia",69.5,7200,47,"South America"  ],
  ["Bosnia and Herzegovina",76.9,11000,36.2,"Europe"  ],
  ["Botswana",63.3,17000,60.5,"Sub-Saharan Africa"  ],
  ["Brazil",74,15200,49.7,"South America"  ],
  ["British Virgin Islands",78.8,42300,49.7,"South & South East Asia"  ],
  ["Brunei",77.3,76900,49.7,"South & South East Asia"  ],
  ["Bulgaria",74.7,20300,37,"Europe"  ],
  ["Burkina Faso",55.9,1800,39.5,"Sub-Saharan Africa"  ],
  ["Burma",68.2,5800,39.5,"South & South East Asia"  ],
  ["Burundi",60.9,800,42.4,"Sub-Saharan Africa"  ],
  ["Cabo Verde",72.4,6700,42.4,"Sub-Saharan Africa"  ],
  ["Cambodia",64.9,3700,37.9,"South & South East Asia"  ],
  ["Cameroon",59,3200,44.6,"Sub-Saharan Africa"  ],
  ["Canada",81.9,46400,32.1,"North America"  ],
  ["Cayman Islands",81.3,43800,32.1,"Caribbean Islands"  ],
  ["Central African Republic",52.8,700,61.3,"Sub-Saharan Africa"  ],
  ["Chad",50.6,2400,43.3,"Sub-Saharan Africa"  ],
  ["Chile",78.9,24100,50.5,"South America"  ],
  ["China",75.7,15400,46.5,"East Asia"  ],
  ["Colombia",75.9,14100,53.5,"South America"  ],
  ["Comoros",64.6,1500,53.5,"Sub-Saharan Africa"  ],
  ["Congo, Democratic Republic of the",57.7,800,53.5,"Sub-Saharan Africa"  ],
  ["Congo, Republic of the",59.8,6700,53.5,"Sub-Saharan Africa"  ],
  ["Cook Islands",76,12300,53.5,"Oceania"  ],
  ["Costa Rica",78.7,16400,48.5,"Mesoamerica"  ],
  ["Cote d'Ivoire",59,3600,41.5,"Sub-Saharan Africa"  ],
  ["Croatia",76.1,22800,32,"Europe"  ],
  ["Cuba",78.8,11900,32,"Caribbean Islands"  ],
  ["Curacao",78.5,15000,32,"Caribbean Islands"  ],
  ["Cyprus",78.8,35000,34.8,"West & Central Asia"  ],
  ["Czechia",78.8,33200,25,"Europe"  ],
  ["Denmark",79.5,48000,28.8,"Europe"  ],
  ["Djibouti",63.6,3400,40.9,"Sub-Saharan Africa"  ],
  ["Dominica",77.2,11300,40.9,"Caribbean Islands"  ],
  ["Dominican Republic",78.3,16000,47.1,"Caribbean Islands"  ],
  ["Ecuador",77,11100,48.5,"South America"  ],
  ["Egypt",73,12600,30.8,"North Africa"  ],
  ["El Salvador",74.9,8900,37,"Mesoamerica"  ],
  ["Equatorial Guinea",64.6,38600,37,"Sub-Saharan Africa"  ],
  ["Eritrea",65.2,1400,37,"Sub-Saharan Africa"  ],
  ["Estonia",76.9,29300,34.8,"Europe"  ],
  ["Ethiopia",62.6,1900,33,"Sub-Saharan Africa"  ],
  ["European Union",80.2,39200,31,"South America"  ],
  ["Faroe Islands",80.5,40000,22.7,"Europe"  ],
  ["Fiji",73,9300,22.7,"Oceania"  ],
  ["Finland",81,42200,21.5,"Europe"  ],
  ["France",81.9,42300,29.2,"Europe"  ],
  ["French Polynesia",77.4,17000,29.2,"Oceania"  ],
  ["Gabon",52.1,19100,29.2,"Sub-Saharan Africa"  ],
  ["Gambia, The",65.1,1700,50.2,"Sub-Saharan Africa"  ],
  ["Gaza Strip",74.2,1700,50.2,"West & Central Asia"  ],
  ["Georgia",76.4,10000,40.1,"West & Central Asia"  ],
  ["Germany",80.8,48100,27,"Europe"  ],
  ["Ghana",67,4400,42.3,"Sub-Saharan Africa"  ],
  ["Gibraltar",79.6,61700,42.3,"Europe"  ],
  ["Greece",80.7,26700,36.7,"Europe"  ],
  ["Greenland",72.6,37600,33.9,"Europe"  ],
  ["Grenada",74.5,14100,33.9,"Caribbean Islands"  ],
  ["Guam",76,30500,33.9,"Oceania"  ],
  ["Guatemala",72.6,7900,53,"Mesoamerica"  ],
  ["Guernsey",82.6,52500,53,"Europe"  ],
  ["Guinea",61,1300,39.4,"Sub-Saharan Africa"  ],
  ["Guinea-Bissau",51,1700,39.4,"Sub-Saharan Africa"  ],
  ["Guyana",68.6,7900,44.6,"South America"  ],
  ["Haiti",64.2,1800,60.8,"Caribbean Islands"  ],
  ["Honduras",71.2,5300,47.1,"Mesoamerica"  ],
  ["Hong Kong",83,58300,53.7,"East Asia"  ],
  ["Hungary",76.1,27500,28.2,"Europe"  ],
  ["Iceland",83.1,49200,28,"Europe"  ],
  ["India",68.8,6600,35.2,"South & South East Asia"  ],
  ["Indonesia",73,11700,36.8,"South & South East Asia"  ],
  ["Iran",74,18100,44.5,"West & Central Asia"  ],
  ["Iraq",74.9,17900,44.5,"West & Central Asia"  ],
  ["Ireland",80.9,69200,31.3,"Europe"  ],
  ["Isle of Man",81.3,84600,31.3,"Europe"  ],
  ["Israel",82.5,35200,42.8,"West & Central Asia"  ],
  ["Italy",82.3,36800,31.9,"Europe"  ],
  ["Jamaica",73.7,9000,45.5,"Caribbean Islands"  ],
  ["Japan",85.3,41300,37.9,"East Asia"  ],
  ["Jersey",81.9,49500,37.9,"Europe"  ],
  ["Jordan",74.8,12300,39.7,"West & Central Asia"  ],
  ["Kazakhstan",71.1,25100,26.3,"West & Central Asia"  ],
  ["Kenya",64.3,3400,42.5,"Sub-Saharan Africa"  ],
  ["Kiribati",66.5,1800,42.5,"Oceania"  ],
  ["Korea, North",70.7,1700,42.5,"East Asia"  ],
  ["Korea, South",82.5,37700,34.1,"East Asia"  ],
  ["Kuwait",78.2,71900,30,"West & Central Asia"  ],
  ["Kyrgyzstan",70.9,3500,33.4,"West & Central Asia"  ],
  ["Laos",64.6,5700,36.7,"South & South East Asia"  ],
  ["Latvia",74.7,25700,34.5,"Europe"  ],
  ["Lebanon",77.8,18500,34.5,"West & Central Asia"  ],
  ["Lesotho",53,3600,63.2,"Sub-Saharan Africa"  ],
  ["Liberia",63.3,900,32,"Sub-Saharan Africa"  ],
  ["Libya",76.7,8700,32,"North Africa"  ],
  ["Liechtenstein",81.9,139100,32,"Europe"  ],
  ["Lithuania",75,30000,37.9,"Europe"  ],
  ["Luxembourg",82.3,104000,30.4,"Europe"  ],
  ["Macau",84.6,95100,35,"East Asia"  ],
  ["Macedonia",76.4,14600,33.7,"Europe"  ],
  ["Madagascar",66.3,1500,41,"Sub-Saharan Africa"  ],
  ["Malawi",61.7,1100,46.1,"Sub-Saharan Africa"  ],
  ["Malaysia",75.2,27300,46.2,"South & South East Asia"  ],
  ["Maldives",75.8,15500,38.4,"South & South East Asia"  ],
  ["Mali",60.3,2300,40.1,"Sub-Saharan Africa"  ],
  ["Malta",80.5,39900,28.1,"Europe"  ],
  ["Marshall Islands",73.4,3300,28.1,"Oceania"  ],
  ["Mauritania",63.4,4300,37,"Sub-Saharan Africa"  ],
  ["Mauritius",75.8,20400,35.9,"Sub-Saharan Africa"  ],
  ["Mexico",76.1,18900,48.2,"Mesoamerica"  ],
  ["Micronesia, Federated States of",73.1,3200,61.1,"Oceania"  ],
  ["Moldova",71,5300,26.8,"North Asia"  ],
  ["Monaco",89.4,115700,26.8,"Europe"  ],
  ["Mongolia",69.9,12300,36.5,"East Asia"  ],
  ["Montserrat",74.6,8500,26.2,"Caribbean Islands"  ],
  ["Morocco",77.1,8300,40.9,"North Africa"  ],
  ["Mozambique",53.7,1200,45.6,"Sub-Saharan Africa"  ],
  ["Namibia",64,11300,59.7,"Sub-Saharan Africa"  ],
  ["Nauru",67.4,11600,59.7,"Oceania"  ],
  ["Nepal",71,2500,32.8,"South & South East Asia"  ],
  ["Netherlands",81.4,51000,30.3,"Europe"  ],
  ["New Caledonia",77.9,31100,30.3,"Oceania"  ],
  ["New Zealand",81.3,37300,36.2,"Oceania"  ],
  ["Nicaragua",73.5,5500,47.1,"Mesoamerica"  ],
  ["Niger",55.9,1100,34,"Sub-Saharan Africa"  ],
  ["Nigeria",53.8,5900,48.8,"Sub-Saharan Africa"  ],
  ["Northern Mariana Islands",75.4,13300,48.8,"Oceania"  ],
  ["Norway",81.9,69200,26.8,"Europe"  ],
  ["Oman",75.7,46700,26.8,"West & Central Asia"  ],
  ["Pakistan",68.1,5100,30.7,"West & Central Asia"  ],
  ["Palau",73.4,15400,30.7,"Oceania"  ],
  ["Panama",78.8,23000,50.7,"Mesoamerica"  ],
  ["Papua New Guinea",67.3,3500,50.9,"Oceania"  ],
  ["Paraguay",77.4,9400,51.7,"South America"  ],
  ["Peru",74,12900,45.3,"South America"  ],
  ["Philippines",69.4,7700,44.4,"South & South East Asia"  ],
  ["Poland",77.8,27800,30.8,"Europe"  ],
  ["Portugal",79.4,28900,33.9,"Europe"  ],
  ["Puerto Rico",80.9,38400,33.9,"Caribbean Islands"  ],
  ["Qatar",78.9,127700,33.9,"West & Central Asia"  ],
  ["Romania",75.4,22300,27.3,"Europe"  ],
  ["Russia",71,26500,41.2,"North Asia"  ],
  ["Rwanda",64.3,2000,46.8,"Sub-Saharan Africa"  ],
  ["Saint Helena, Ascension, and Tristan da Cunha",79.6,7800,46.8,"Sub-Saharan Africa"  ],
  ["Saint Kitts and Nevis",75.9,26100,46.8,"Caribbean Islands"  ],
  ["Saint Lucia",77.9,11800,46.8,"Caribbean Islands"  ],
  ["Saint Pierre and Miquelon",80.6,34900,46.8,"North America"  ],
  ["Saint Vincent and the Grenadines",75.5,11300,46.8,"Caribbean Islands"  ],
  ["Samoa",74,5500,46.8,"Oceania"  ],
  ["San Marino",83.3,59500,46.8,"Europe"  ],
  ["Sao Tome and Principe",65.3,3100,46.8,"Sub-Saharan Africa"  ],
  ["Saudi Arabia",75.5,55200,45.9,"West & Central Asia"  ],
  ["Senegal",62.1,2600,40.3,"Sub-Saharan Africa"  ],
  ["Serbia",75.7,14500,38.7,"Europe"  ],
  ["Seychelles",74.9,27600,38.7,"Sub-Saharan Africa"  ],
  ["Sierra Leone",58.6,1700,34,"Sub-Saharan Africa"  ],
  ["Singapore",85.2,87900,45.8,"South & South East Asia"  ],
  ["Sint Maarten",78.3,66800,45.8,"Caribbean Islands"  ],
  ["Slovakia",77.3,31300,23.7,"Europe"  ],
  ["Slovenia",78.3,32100,24.5,"Europe"  ],
  ["Solomon Islands",75.6,2000,24.5,"Oceania"  ],
  ["Somalia",52.8,400,24.5,"Sub-Saharan Africa"  ],
  ["South Africa",63.8,13200,62.5,"Sub-Saharan Africa"  ],
  ["Spain",81.8,36400,35.9,"Europe"  ],
  ["Sri Lanka",76.9,12300,49,"South & South East Asia"  ],
  ["Sudan",64.4,4400,49,"Sub-Saharan Africa"  ],
  ["Suriname",72.5,14000,49,"South America"  ],
  ["Swaziland",52.1,9800,50.4,"Sub-Saharan Africa"  ],
  ["Sweden",82.1,49800,24.9,"Europe"  ],
  ["Switzerland",82.6,59600,29.5,"Europe"  ],
  ["Syria",75.1,2900,29.5,"West & Central Asia"  ],
  ["Taiwan",80.2,48100,33.6,"East Asia"  ],
  ["Tajikistan",68.1,3000,32.6,"West & Central Asia"  ],
  ["Tanzania",62.6,3100,37.6,"Sub-Saharan Africa"  ],
  ["Thailand",74.9,16900,44.5,"South & South East Asia"  ],
  ["Timor-Leste",68.4,4200,31.9,"South & South East Asia"  ],
  ["Togo",65.4,1600,46,"Sub-Saharan Africa"  ],
  ["Tonga",76.4,5400,46,"Oceania"  ],
  ["Trinidad and Tobago",73.1,31900,46,"Caribbean Islands"  ],
  ["Tunisia",75.7,11600,40,"North Africa"  ],
  ["Turkey",75,24900,40.2,"West & Central Asia"  ],
  ["Turkmenistan",70.4,17500,40.8,"West & Central Asia"  ],
  ["Turks and Caicos Islands",80,29100,40.8,"Caribbean Islands"  ],
  ["Tuvalu",66.9,3500,40.8,"Oceania"  ],
  ["Uganda",55.9,2100,39.5,"Sub-Saharan Africa"  ],
  ["Ukraine",72.1,8300,24.6,"North Asia"  ],
  ["United Arab Emirates",77.7,67900,24.6,"West & Central Asia"  ],
  ["United Kingdom",80.8,42500,32.4,"Europe"  ],
  ["United States",80,57400,45,"North America"  ],
  ["Uruguay",77.4,21500,41.6,"South America"  ],
  ["Uzbekistan",74,6600,36.8,"West & Central Asia"  ],
  ["Vanuatu",73.7,2600,36.8,"Oceania"  ],
  ["Venezuela",76,13800,39,"South America"  ],
  ["Vietnam",73.7,6400,37.6,"South & South East Asia"  ],
  ["Virgin Islands",79.4,36100,37.6,"Caribbean Islands"  ],
  ["Wallis and Futuna",79.8,3800,37.6,"Oceania"  ],
  ["West Bank",75.2,4300,34.5,"West & Central Asia"  ],
  ["Western Sahara",63.4,2500,34.5,"North Africa"  ],
  ["Yemen",65.9,2400,37.9,"West & Central Asia"  ],
  ["Zambia",52.7,3900,57.5,"Sub-Saharan Africa"  ],
  ["Zimbabwe",60.4,2000,50.1,"Sub-Saharan Africa"  ]
];

const w = 1000;
const h = 800;
const padding = 60;
const marginTop = 200;
const legendRectSize = 18;
const legendSpacing = 4;

const formatCurrency = d3.format("$,");

const maxLE = d3.max(dataset, (d) => d[1]);
const minLE = d3.min(dataset, (d) => d[1]);
const yScale = d3.scaleLinear()
                 .domain([minLE, maxLE])
                 .range([h - padding, marginTop]);
const maxGini = d3.max(dataset, (d) => d[3]);
const minGini = d3.min(dataset, (d) => d[3]);
const xScale = d3.scaleLinear()
                 .domain([minGini, maxGini])
                 .range([padding, w - padding]);
const maxGDP = d3.max(dataset, (d) => d[2]);
const minGDP = d3.min(dataset, (d) => d[2]);
const rScale = d3.scaleLinear()
                 .domain([minGDP, maxGDP])
                 .range([5, 25]);
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

const tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html((d) => {
    return "<div class='tip-name'>" + d[0] + "</div><div class='tip-gdp'>GDP Per Capita:<br>" + formatCurrency(d[2]) + "<br><div class='tip-gdp'>Life Expectancy: " + d[1] + " yrs</div><div class='tip-gdp'>Gini Index: " + d[3] + "</div>";
  });

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "chart")
  .attr("id", "chart");

svg.call(tip);

const colors = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const continents = ["North Asia", "East Asia", "South & South East Asia", "West & Central Asia", "Europe", "North Africa", "Sub-Saharan Africa", "Oceania", "Mesoamerica", "Caribbean Islands", "North America", "South America" ];
const getColor = (continent) => {
  const index = continents.indexOf(continent);
  return colors[index];
}
const color = d3.scaleOrdinal(d3.schemeCategory20c);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[3]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", (d) => rScale(d[2]))
  .attr("width", 9)
  // .attr("fill", (d) => `hsl(${getColor(d[4]) - (2 * rScale(d[2]))}, 100%, ${50 + (2 * rScale(d[2]))}%)` )
  .attr("fill", (d) => color(d[4]))
  .attr("class", "circle")
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide);

svg.append("g")
   .attr("transform", `translate(0, ${h - padding})`)
   .call(xAxis);

// add titles to the axes
svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (padding/2) +","+(h/2)+")rotate(-90)")
    .text("Life Expectancy at Birth (in years)");

svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (w/2) +","+(h-(padding/3))+")")
    .text("Gini Index (Measure of income inequality)");

svg.append("g")
   .attr("transform", `translate(${padding}, 0)`)
   .call(yAxis);

const legend = svg.selectAll('.legend')
                  .data(color.domain())
                  .enter()
                  .append('g')
                  .attr('class', 'legend')
                  .attr('transform', function(d, i) {
                    var height = legendRectSize + legendSpacing;
                    var offset =  height * color.domain().length / 2;
                    // var horz = -2 * legendRectSize;
                    const horz = 10;
                    var vert = i * height;
                    return 'translate(' + horz + ',' + vert + ')';
                  });

legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .style('fill', color)
  .style('stroke', color);

legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; });