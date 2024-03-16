var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e) {
    var span_items = document.querySelectorAll(".table_body ul li .item .name span");
    var search_item = e.target.value.toLowerCase();

    span_items.forEach(function(item) {
        if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
            item.closest("li").style.display = "block";
        } else {
            item.closest("li").style.display = "none";
        }
    });
});

// Dynamic data of 10 people
const dynamicPeople = [
    { name: "Alice", latitude: 12.8423, longitude: 80.1545 },
    { name: "Bob", latitude: 12.8424, longitude: 80.1546 },
    { name: "Charlie", latitude: 12.8425, longitude: 80.1547 },
    { name: "David", latitude: 12.8426, longitude: 80.1548 },
    { name: "Eve", latitude: 12.8427, longitude: 80.1549 },
    { name: "Frank", latitude: 12.8428, longitude: 80.1550 },
    { name: "Grace", latitude: 12.8429, longitude: 80.1551 },
    { name: "Henry", latitude: 12.8430, longitude: 80.1552 },
    { name: "Ivy", latitude: 12.8431, longitude: 80.1553 },
    { name: "Jack", latitude: 12.8432, longitude: 80.1554 }
];


function filterPeople() {
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);
    const searchQuery = document.getElementById("search_input").value.toLowerCase();

    if (isNaN(latitude) || isNaN(longitude)) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    const filteredPeople = dynamicPeople.filter(person => {
        return person.latitude < latitude && person.longitude < longitude && person.name.toLowerCase().includes(searchQuery);
    });

    displayResults(filteredPeople);
}

function displayResults(people) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (people.length === 0) {
        resultsContainer.innerHTML = "No matching people found.";
        return;
    }

    const ul = document.createElement("ul");
    people.forEach(person => {
        const li = document.createElement("li");
        li.textContent = person.name;
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}
