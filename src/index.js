"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bike_1 = require("./bike");
const rent_1 = require("./rent");
const user_1 = require("./user");
const bike = new bike_1.Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, [], '101', false);
const bike2 = new bike_1.Bike('run bike', 'mountain', 123, 500, 100.5, 'desc', 5, [], '111', true);
const user = new user_1.User('Maria', 'maria@mail.com', '1234');
const today = new Date();
const twoDaysFromToday = new Date();
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const sevenDaysFromToday = new Date();
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7);
const rent1 = rent_1.Rent.create([], bike, user, today, twoDaysFromToday);
const user2 = new user_1.User('Gabriel', 'gabriel@mail.com', '3123');
const app = new app_1.App();
//app.registerUser(user)
//app.registerAndAuthenticateUser(user)
//app.listUsers()
//console.log(user)
app.registerBike(bike);
app.registerBike(bike2);
app.listBike();
//app.rentBike(bike,'maria@mail.com',today,twoDaysFromToday)
//app.rentBike(bike,'gabriel@mail.com',today,twoDaysFromToday)
//console.log(JSON.stringify(app, undefined, 2));
//app.retornarBike(bike)
//console.log(bike)
//app.removeUser(user)
//console.log(JSON.stringify(app, undefined, 2));
//console.log(app.findUser('maria@mail.com'))
