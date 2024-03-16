function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to calculate the Haversine distance between two points
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);

    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

// Function to find people within a specified range from a reference point
function findPeopleWithinRange(referencePoint, people, radius) {
    const refLat = referencePoint[0];
    const refLon = referencePoint[1];
    const peopleWithinRange = [];

    for (const person of people) {
        const personLat = person.latitude;
        const personLon = person.longitude;
        const distance = haversineDistance(refLat, refLon, personLat, personLon);

        if (distance <= radius) {
            peopleWithinRange.push(person);
        }
    }

    return peopleWithinRange;
}

// Example usage
const referencePoint = [13.0827, 80.2707];
const people = [
    { name: "Sunat Qayoom", latitude: 13.0827, longitude: 80.2707 },
    { name: "NC Gautham", latitude: 13.0835, longitude: 80.2707 },
    { name: "Srishti Pandey", latitude: 13.0829, longitude: 80.2707 },
    { name: "Eve", latitude: 19.0760, longitude: 72.8777 },
    { name: "Saloni Gupta", latitude: 27.5706, longitude: 80.0982 },
    { name: "Fiza Rehman", latitude: 13.8649, longitude: 80.4965 },
    { name: "Madhav Pandey", latitude: 14.0026, longitude: 81.0024 },
    { name: "Jannat", latitude: 16.0245, longitude: 85.0654 }
];
const radius = parseFloat(prompt("Enter the radius: ")); // 1 kilometers

const peopleWithinRange = findPeopleWithinRange(referencePoint, people, radius);
console.log("People within range:");
for (const person of peopleWithinRange) {
    console.log(person.name);
}