const express = require('express');
const faker = require('faker');

const app = express();
const port = 8000;



// const fakePerson = {
//     name: faker.name.firstName(),
//     lastname: faker.name.lastName(),
//     number: faker.phone.phoneNumber(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
// }
// console.log(fakePerson)

app.get('/api/users/new', (req,res) => {
    const fakePerson = {
        id: Math.floor(Math.random() * 100000),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    res.json({message: fakePerson})
})
app.get('/api/companies/new', (req,res) => {
    const fakeCompany ={
        id: Math.floor(Math.random() * 100000),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    res.json({message: fakeCompany})
})

app.get('/api/companies/users/new', (req,res)=> {
    const fakeCompany ={
        id: Math.floor(Math.random() * 100000),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    const fakePerson = {
        id: Math.floor(Math.random() * 100000),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    res.json({message: fakeCompany, fakePerson})
})
app.listen(port, () => console.log(`express server fired up on port ${8000}`));