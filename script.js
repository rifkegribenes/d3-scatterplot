// get data

const request = new XMLHttpRequest();
request.open('GET', 'https://data.cdc.gov/api/views/w9j2-ggv5/rows.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    const dataset = JSON.parse(request.responseText);
    let w = 1000;
    const h = 600;
    const padding = 60;

    const formatDate = d3.timeFormat("%b %Y");
    const formatCurrency = d3.format("$,.2f");

    const maxVal = d3.max(dataset, (d) => d[1]);
    const yScale = d3.scaleLinear()
                     .domain([0, maxVal])
                     .range([h - padding, padding]);
    const maxDate = d3.max(dataset, (d) => new Date(d[0]));
    const minDate = d3.min(dataset, (d) => new Date(d[0]));
    const xScale = d3.scaleTime()
                     .domain([minDate, maxDate])
                     .range([padding, w - padding]);
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html((d) => {
        return "<div class='tip-qty'>" + formatCurrency(d[1]) +" Billion</div><div class='tip-date'>" + formatDate(new Date(d[0])) + "</div>";
      });

    const svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "chart")
      .attr("id", "chart");

    svg.call(tip);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(new Date(d[0])))
      .attr("y", (d) => yScale(d[1]))
      .attr("width", 9)
      .attr("height", (d, i) => h - padding - yScale(d[1]))
      .attr("fill", "DarkBlue")
      .attr("class", "bar")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    svg.append("g")
       .attr("transform", `translate(0, ${h - padding})`)
       .call(xAxis);

    svg.append("g")
       .attr("transform", `translate(${padding}, 0)`)
       .call(yAxis);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();