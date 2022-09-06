const person = {
    person1: {
        name: "Azhar",
        age: 25,
    },
    person2: {
        name: "Hamza",
        age: 25,
    },
    person3: {
        name: "Usman",
        age: 25,
    },
}

const newperson = {...person.person3,};
console.log(newperson);

//__________________________________________________________

const array =[
    ["Azhar","Zafar"],
    ["Hamza","Reahman"],
    ["Usman","Junaid"],
]

const newarray = [...array[2]]
console.log(newarray);


