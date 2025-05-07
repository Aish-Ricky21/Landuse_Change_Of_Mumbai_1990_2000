const data = [
  { "CLASS_NAME": "WATERBODY", "LOSS": 23.265, "GAIN": 26.2656, "CHANGE": 0.151270417, "UNCHANGED": 19.836 },
  { "CLASS_NAME": "SHRUB", "LOSS": 77.0463, "GAIN": 64.71, "CHANGE": -0.325049207, "UNCHANGED": 37.9521 },
  { "CLASS_NAME": "BARELAND", "LOSS": 29.5533, "GAIN": 19.9638, "CHANGE": -1.115473199, "UNCHANGED": 8.5968 },
  { "CLASS_NAME": "WETLAND", "LOSS": 23.7879, "GAIN": 20.799, "CHANGE": -0.319265526, "UNCHANGED": 9.3618 },
  { "CLASS_NAME": "LOW DENSITY URBAN", "LOSS": 58.5558, "GAIN": 66.0573, "CHANGE": 0.27133928, "UNCHANGED": 27.6462 },
  { "CLASS_NAME": "VEGETATION", "LOSS": 91.7199, "GAIN": 87.0525, "CHANGE": -0.073611446, "UNCHANGED": 63.4059 },
  { "CLASS_NAME": "HIGH DENSITY URBAN", "LOSS": 156.6801, "GAIN": 175.7601, "CHANGE": 0.15166582, "UNCHANGED": 125.8029 }
];

// Table Rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row.CLASS_NAME}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Grouped Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
], );

// Pie Chart (Dropdown Controlled)
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d.CLASS_NAME);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial Load
updatePieChart("Changed");

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});













  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  