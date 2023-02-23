//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for of loop
const users = ['Rhoda', 'Sam', 'Tim', 'Dav', 'Sim'];

for (const user of users) {
    console.log(user);
}

// for in loop
const loggedInUser = {
    name: 'Max',
    Age: '23',
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

//while loop
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done');