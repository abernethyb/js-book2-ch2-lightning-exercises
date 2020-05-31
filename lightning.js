//name of car, chose to use object.
const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "Red"
};

console.log(car);

//animals in shelter.  chose to use array
const shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

console.log(shelterAnimals);

/* Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different. */

const familyMembers = [
    Grace = {
        relationship: "Wife",
        birthday: "August 23rd"
    },
    Cheezepuff = {
        relationship: "Cat",
        birthday: "October (ask Grace for day)"
    },
    Ru = {
        relationship: "Cat",
        birthday: "October (ask Grace for day)"
    },
    Mom = {
        relationship: "Mother",
        birthday: "April 6th"
    }
];

console.log(familyMembers);

console.log(Grace.birthday);


/*
beatles
output: 
Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

*/

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ],
}

console.log(`${beatles.members[1].name} was in the Beatles from 1960 to 1970. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)
