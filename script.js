// source: CIA World FactBook: https://www.cia.gov/library/publications/the-world-factbook/rankorder/rankorderguide.html

const dataset = [
  ["Albania",78.5,11800,29,"Europe"  ],
  ["Algeria",77,15000,35.3,"Africa"  ],
  ["American Samoa",73.4,13000,35.3,"Oceania"  ],
  ["Andorra",82.9,49900,35.3,"Europe"  ],
  ["Angola",60.2,6800,35.3,"Africa"  ],
  ["Anguilla",81.5,12200,35.3,"Americas"  ],
  ["Antigua and Barbuda",76.7,25200,35.3,"Americas"  ],
  ["Argentina",77.3,20000,42.7,"Americas"  ],
  ["Armenia",74.9,8600,31.5,"Asia"  ],
  ["Aruba",76.9,25300,31.5,"Americas"  ],
  ["Australia",82.3,48900,30.3,"Oceania"  ],
  ["Austria",81.6,48000,29.2,"Europe"  ],
  ["Azerbaijan",72.8,17400,33.7,"Asia"  ],
  ["Bahamas, The",72.6,24600,33.7,"Americas"  ],
  ["Bahrain",79,50700,33.7,"Asia"  ],
  ["Bangladesh",73.4,3900,32.1,"Asia"  ],
  ["Barbados",75.5,17100,32.1,"Americas"  ],
  ["Belarus",73,18000,26.5,"Europe"  ],
  ["Belgium",81.1,45000,25.9,"Europe"  ],
  ["Belize",68.9,8200,25.9,"Americas"  ],
  ["Benin",62.3,2100,36.5,"Africa"  ],
  ["Bermuda",81.4,85700,36.5,"Americas"  ],
  ["Bhutan",70.6,8200,38.8,"Asia"  ],
  ["Bolivia",69.5,7200,47,"Americas"  ],
  ["Bosnia and Herzegovina",76.9,11000,36.2,"Europe"  ],
  ["Botswana",63.3,17000,60.5,"Africa"  ],
  ["Brazil",74,15200,49.7,"Americas"  ],
  ["British Virgin Islands",78.8,42300,49.7,"Americas"  ],
  ["Brunei",77.3,76900,49.7,"Asia"  ],
  ["Bulgaria",74.7,20300,37,"Europe"  ],
  ["Burkina Faso",55.9,1800,39.5,"Africa"  ],
  ["Burma",68.2,5800,39.5,"Africa"  ],
  ["Burundi",60.9,800,42.4,"Africa"  ],
  ["Cabo Verde",72.4,6700,42.4,"Africa"  ],
  ["Cambodia",64.9,3700,37.9,"Asia"  ],
  ["Cameroon",59,3200,44.6,"Africa"  ],
  ["Canada",81.9,46400,32.1,"Americas"  ],
  ["Cayman Islands",81.3,43800,32.1,"Americas"  ],
  ["Central African Republic",52.8,700,61.3,"Africa"  ],
  ["Chad",50.6,2400,43.3,"Africa"  ],
  ["Chile",78.9,24100,50.5,"Americas"  ],
  ["China",75.7,15400,46.5,"Asia"  ],
  ["Colombia",75.9,14100,53.5,"Americas"  ],
  ["Comoros",64.6,1500,53.5,"Africa"  ],
  ["Congo, Democratic Republic of the",57.7,800,53.5,"Africa"  ],
  ["Congo, Republic of the",59.8,6700,53.5,"Africa"  ],
  ["Cook Islands",76,12300,53.5,"Oceania"  ],
  ["Costa Rica",78.7,16400,48.5,"Americas"  ],
  ["Cote d'Ivoire",59,3600,41.5,"Americas"  ],
  ["Croatia",76.1,22800,32,"Europe"  ],
  ["Cuba",78.8,11900,32,"Americas"  ],
  ["Curacao",78.5,15000,32,"Americas"  ],
  ["Cyprus",78.8,35000,34.8,"Europe"  ],
  ["Czechia",78.8,33200,25,"Europe"  ],
  ["Denmark",79.5,48000,28.8,"Europe"  ],
  ["Djibouti",63.6,3400,40.9,"Africa"  ],
  ["Dominica",77.2,11300,40.9,"Americas"  ],
  ["Dominican Republic",78.3,16000,47.1,"Americas"  ],
  ["Ecuador",77,11100,48.5,"Americas"  ],
  ["Egypt",73,12600,30.8,"Africa"  ],
  ["El Salvador",74.9,8900,37,"Americas"  ],
  ["Equatorial Guinea",64.6,38600,37,"Africa"  ],
  ["Eritrea",65.2,1400,37,"Africa"  ],
  ["Estonia",76.9,29300,34.8,"Europe"  ],
  ["Ethiopia",62.6,1900,33,"Africa"  ],
  ["European Union",80.2,39200,31,"Africa"  ],
  ["Faroe Islands",80.5,40000,22.7,"Europe"  ],
  ["Fiji",73,9300,22.7,"Oceania"  ],
  ["Finland",81,42200,21.5,"Europe"  ],
  ["France",81.9,42300,29.2,"Europe"  ],
  ["French Polynesia",77.4,17000,29.2,"Oceania"  ],
  ["Gabon",52.1,19100,29.2,"Africa"  ],
  ["Gambia, The",65.1,1700,50.2,"Africa"  ],
  ["Gaza Strip",74.2,1700,50.2,"Africa"  ],
  ["Georgia",76.4,10000,40.1,"Asia"  ],
  ["Germany",80.8,48100,27,"Europe"  ],
  ["Ghana",67,4400,42.3,"Africa"  ],
  ["Gibraltar",79.6,61700,42.3,"Europe"  ],
  ["Greece",80.7,26700,36.7,"Europe"  ],
  ["Greenland",72.6,37600,33.9,"Americas"  ],
  ["Grenada",74.5,14100,33.9,"Americas"  ],
  ["Guam",76,30500,33.9,"Oceania"  ],
  ["Guatemala",72.6,7900,53,"Americas"  ],
  ["Guernsey",82.6,52500,53,"Europe"  ],
  ["Guinea",61,1300,39.4,"Africa"  ],
  ["Guinea-Bissau",51,1700,39.4,"Africa"  ],
  ["Guyana",68.6,7900,44.6,"Americas"  ],
  ["Haiti",64.2,1800,60.8,"Americas"  ],
  ["Honduras",71.2,5300,47.1,"Americas"  ],
  ["Hong Kong",83,58300,53.7,"Americas"  ],
  ["Hungary",76.1,27500,28.2,"Europe"  ],
  ["Iceland",83.1,49200,28,"Europe"  ],
  ["India",68.8,6600,35.2,"Asia"  ],
  ["Indonesia",73,11700,36.8,"Asia"  ],
  ["Iran",74,18100,44.5,"Asia"  ],
  ["Iraq",74.9,17900,44.5,"Asia"  ],
  ["Ireland",80.9,69200,31.3,"Europe"  ],
  ["Isle of Man",81.3,84600,31.3,"Europe"  ],
  ["Israel",82.5,35200,42.8,"Asia"  ],
  ["Italy",82.3,36800,31.9,"Europe"  ],
  ["Jamaica",73.7,9000,45.5,"Americas"  ],
  ["Japan",85.3,41300,37.9,"Asia"  ],
  ["Jersey",81.9,49500,37.9,"Europe"  ],
  ["Jordan",74.8,12300,39.7,"Asia"  ],
  ["Kazakhstan",71.1,25100,26.3,"Asia"  ],
  ["Kenya",64.3,3400,42.5,"Africa"  ],
  ["Kiribati",66.5,1800,42.5,"Oceania"  ],
  ["Korea, North",70.7,1700,42.5,"Oceania"  ],
  ["Korea, South",82.5,37700,34.1,"Oceania"  ],
  ["Kuwait",78.2,71900,30,"Asia"  ],
  ["Kyrgyzstan",70.9,3500,33.4,"Asia"  ],
  ["Laos",64.6,5700,36.7,"Asia"  ],
  ["Latvia",74.7,25700,34.5,"Europe"  ],
  ["Lebanon",77.8,18500,34.5,"Asia"  ],
  ["Lesotho",53,3600,63.2,"Africa"  ],
  ["Liberia",63.3,900,32,"Africa"  ],
  ["Libya",76.7,8700,32,"Africa"  ],
  ["Liechtenstein",81.9,139100,32,"Europe"  ],
  ["Lithuania",75,30000,37.9,"Europe"  ],
  ["Luxembourg",82.3,104000,30.4,"Europe"  ],
  ["Macau",84.6,95100,35,"Europe"  ],
  ["Macedonia",76.4,14600,33.7,"Europe"  ],
  ["Madagascar",66.3,1500,41,"Africa"  ],
  ["Malawi",61.7,1100,46.1,"Africa"  ],
  ["Malaysia",75.2,27300,46.2,"Asia"  ],
  ["Maldives",75.8,15500,38.4,"Asia"  ],
  ["Mali",60.3,2300,40.1,"Africa"  ],
  ["Malta",80.5,39900,28.1,"Europe"  ],
  ["Marshall Islands",73.4,3300,28.1,"Oceania"  ],
  ["Mauritania",63.4,4300,37,"Africa"  ],
  ["Mauritius",75.8,20400,35.9,"Africa"  ],
  ["Mexico",76.1,18900,48.2,"Americas"  ],
  ["Micronesia, Federated States of",73.1,3200,61.1,"Oceania"  ],
  ["Moldova",71,5300,26.8,"Europe"  ],
  ["Monaco",89.4,115700,26.8,"Europe"  ],
  ["Mongolia",69.9,12300,36.5,"Asia"  ],
  ["Montserrat",74.6,8500,26.2,"Americas"  ],
  ["Morocco",77.1,8300,40.9,"Africa"  ],
  ["Mozambique",53.7,1200,45.6,"Africa"  ],
  ["Namibia",64,11300,59.7,"Africa"  ],
  ["Nauru",67.4,11600,59.7,"Oceania"  ],
  ["Nepal",71,2500,32.8,"Asia"  ],
  ["Netherlands",81.4,51000,30.3,"Europe"  ],
  ["New Caledonia",77.9,31100,30.3,"Oceania"  ],
  ["New Zealand",81.3,37300,36.2,"Oceania"  ],
  ["Nicaragua",73.5,5500,47.1,"Americas"  ],
  ["Niger",55.9,1100,34,"Africa"  ],
  ["Nigeria",53.8,5900,48.8,"Africa"  ],
  ["Northern Mariana Islands",75.4,13300,48.8,"Oceania"  ],
  ["Norway",81.9,69200,26.8,"Europe"  ],
  ["Oman",75.7,46700,26.8,"Asia"  ],
  ["Pakistan",68.1,5100,30.7,"Asia"  ],
  ["Palau",73.4,15400,30.7,"Oceania"  ],
  ["Panama",78.8,23000,50.7,"Americas"  ],
  ["Papua New Guinea",67.3,3500,50.9,"Oceania"  ],
  ["Paraguay",77.4,9400,51.7,"Americas"  ],
  ["Peru",74,12900,45.3,"Americas"  ],
  ["Philippines",69.4,7700,44.4,"Asia"  ],
  ["Poland",77.8,27800,30.8,"Europe"  ],
  ["Portugal",79.4,28900,33.9,"Europe"  ],
  ["Puerto Rico",80.9,38400,33.9,"Americas"  ],
  ["Qatar",78.9,127700,33.9,"Asia"  ],
  ["Romania",75.4,22300,27.3,"Europe"  ],
  ["Russia",71,26500,41.2,"Europe"  ],
  ["Rwanda",64.3,2000,46.8,"Africa"  ],
  ["Saint Helena, Ascension, and Tristan da Cunha",79.6,7800,46.8,"Africa"  ],
  ["Saint Kitts and Nevis",75.9,26100,46.8,"Americas"  ],
  ["Saint Lucia",77.9,11800,46.8,"Americas"  ],
  ["Saint Pierre and Miquelon",80.6,34900,46.8,"Americas"  ],
  ["Saint Vincent and the Grenadines",75.5,11300,46.8,"Americas"  ],
  ["Samoa",74,5500,46.8,"Oceania"  ],
  ["San Marino",83.3,59500,46.8,"Europe"  ],
  ["Sao Tome and Principe",65.3,3100,46.8,"Europe"  ],
  ["Saudi Arabia",75.5,55200,45.9,"Asia"  ],
  ["Senegal",62.1,2600,40.3,"Africa"  ],
  ["Serbia",75.7,14500,38.7,"Europe"  ],
  ["Seychelles",74.9,27600,38.7,"Africa"  ],
  ["Sierra Leone",58.6,1700,34,"Africa"  ],
  ["Singapore",85.2,87900,45.8,"Asia"  ],
  ["Sint Maarten",78.3,66800,45.8,"Asia"  ],
  ["Slovakia",77.3,31300,23.7,"Europe"  ],
  ["Slovenia",78.3,32100,24.5,"Europe"  ],
  ["Solomon Islands",75.6,2000,24.5,"Oceania"  ],
  ["Somalia",52.8,400,24.5,"Africa"  ],
  ["South Africa",63.8,13200,62.5,"Africa"  ],
  ["Spain",81.8,36400,35.9,"Europe"  ],
  ["Sri Lanka",76.9,12300,49,"Asia"  ],
  ["Sudan",64.4,4400,49,"Africa"  ],
  ["Suriname",72.5,14000,49,"Americas"  ],
  ["Swaziland",52.1,9800,50.4,"Africa"  ],
  ["Sweden",82.1,49800,24.9,"Europe"  ],
  ["Switzerland",82.6,59600,29.5,"Europe"  ],
  ["Syria",75.1,2900,29.5,"Asia"  ],
  ["Taiwan",80.2,48100,33.6,"Asia"  ],
  ["Tajikistan",68.1,3000,32.6,"Asia"  ],
  ["Tanzania",62.6,3100,37.6,"Africa"  ],
  ["Thailand",74.9,16900,44.5,"Asia"  ],
  ["Timor-Leste",68.4,4200,31.9,"Asia"  ],
  ["Togo",65.4,1600,46,"Africa"  ],
  ["Tonga",76.4,5400,46,"Oceania"  ],
  ["Trinidad and Tobago",73.1,31900,46,"Americas"  ],
  ["Tunisia",75.7,11600,40,"Africa"  ],
  ["Turkey",75,24900,40.2,"Asia"  ],
  ["Turkmenistan",70.4,17500,40.8,"Asia"  ],
  ["Turks and Caicos Islands",80,29100,40.8,"Americas"  ],
  ["Tuvalu",66.9,3500,40.8,"Oceania"  ],
  ["Uganda",55.9,2100,39.5,"Africa"  ],
  ["Ukraine",72.1,8300,24.6,"Europe"  ],
  ["United Arab Emirates",77.7,67900,24.6,"Asia"  ],
  ["United Kingdom",80.8,42500,32.4,"Europe"  ],
  ["United States",80,57400,45,"Americas"  ],
  ["Uruguay",77.4,21500,41.6,"Americas"  ],
  ["Uzbekistan",74,6600,36.8,"Asia"  ],
  ["Vanuatu",73.7,2600,36.8,"Oceania"  ],
  ["Venezuela",76,13800,39,"Americas"  ],
  ["Vietnam",73.7,6400,37.6,"Asia"  ],
  ["Virgin Islands",79.4,36100,37.6,"Asia"  ],
  ["Wallis and Futuna",79.8,3800,37.6,"Oceania"  ],
  ["West Bank",75.2,4300,34.5,"Oceania"  ],
  ["Western Sahara",63.4,2500,34.5,"Africa"  ],
  ["Yemen",65.9,2400,37.9,"Asia"  ],
  ["Zambia",52.7,3900,57.5,"Africa"  ],
  ["Zimbabwe",60.4,2000,50.1,"Africa"  ]
];

let w = 1000;
const h = 600;
const padding = 60;

const formatCurrency = d3.format("$,");

const maxLE = d3.max(dataset, (d) => d[1]);
const minLE = d3.min(dataset, (d) => d[1]);
const yScale = d3.scaleLinear()
                 .domain([minLE, maxLE])
                 .range([h - padding, padding]);
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

const colors = ["red", "orange", "yellow", "green", "blue"];
const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const getColor = (continent) => {
  const index = continents.indexOf(continent);
  return colors[index];
}

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[3]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", (d) => rScale(d[2]))
  .attr("width", 9)
  .attr("fill", (d) => getColor(d[4]))
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
    .text("Life Expectancy at Birth");

svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (w/2) +","+(h-(padding/3))+")")
    .text("Gini Index (Relative inequality of income distribution)");

svg.append("g")
   .attr("transform", `translate(${padding}, 0)`)
   .call(yAxis);