const people = [
    { name: "Alice", latitude: 12.7128, longitude: -74.0060 },
    { name: "Bob", latitude: 11.0522, longitude: -118.2437 },
    { name: "Charlie", latitude: 51.5074, longitude: -0.1278 },
    { name: "David", latitude: 48.8566, longitude: 2.3522 },
    { name: "Eve", latitude: 52.5200, longitude: 13.4050 },
    { name: "Frank", latitude: 12.8097036, longitude: 80.1552062 },
    { name: "Grace", latitude: 12.7397036, longitude: 80.1552062 },
    { name: "Henry", latitude: 12.8397036, longitude: 80.1552062 },
    { name: "Isabel", latitude: 12.8397036, longitude: 80.1552062 },
    { name: "Jack", latitude: 12.8397036, longitude: 80.1552062 },
    { name: "Kelly", latitude: 12.8397036, longitude: 80.1552062 },
    { name: "Liam", latitude: 12.8397036, longitude: 80.1552062 }
];


function filterPeople() {
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);

    if (isNaN(latitude) || isNaN(longitude)) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    const filteredPeople = people.filter(person => {
        return person.latitude < latitude && person.longitude < longitude;
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