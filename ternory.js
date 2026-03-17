const student = {
    name: "John Doe",
    grades: {
        math: 85,
        science: 90,
    },
    address: {
        city: "Los Angeles",
        zip: "90001",
    },
};

const { name, address: { city, zip } } = student;
console.log(name);
console.log(zip);

console.log(city);