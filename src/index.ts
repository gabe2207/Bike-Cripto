import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

const bike = new Bike('mountain bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [], '101', false)
const bike2 = new Bike('run bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [], '111',true)
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)
const user2 = new User('Gabriel', 'gabriel@mail.com', '3123')



const app = new App()
//USER:
//app.registerAndAuthenticateUser(user)
//app.listUsers()
//console.log(JSON.stringify(app, undefined, 2));
//app.removeUser(user)
//console.log(app.findUser('maria@mail.com'))

//BIKE
app.registerBike(bike)
app.registerBike(bike2)
app.listBike()
//console.log(bike)

//RENT
//app.rentBike(bike,'maria@mail.com',today,twoDaysFromToday)
//app.rentBike(bike,'gabriel@mail.com',today,twoDaysFromToday)
//app.listRent()
//app.retornarBike(bike)


