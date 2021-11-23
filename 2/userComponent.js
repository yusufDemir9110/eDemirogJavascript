import User from "./user.js"
import UserService from "./userServices.js"
import {BaseLogger, ElasticLogger, MongoLogger} from "./logger.js"
import Customer from "./customer.js"

console.log("user component yuklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"yusuf","demir","grave")
let user2 = new User(2,"yavuz","demir","grave")

userService.add(user1)
userService.add(user2)
//kullanicilari kaydettik

//console.log(userService.list())
//kullanicilari listeledik

//console.log(userService.getById(2))
//kullanicilari id ye gore getirdik

console.log('--------------')
userService.load()

//userService.add(new Customer (7,"yusuf","demir","grave","fsfgsw"))//dogru bir kullanim degil
//onun yerine asagidaki sekilde daha iyi
let customerToAdd = new Customer(7,"ztkafasi","tutkafasi","grave","21a")
customerToAdd.type = "customer" //prototyping yaptik


userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)


console.log('--------------')
console.log(userService.getCustomersSorted())

//EK BILGI
//prototyping yani sonradan deger ekleme
let customer = {id:1,firstName:'Yusuf'}
customer.lastName='demir'
console.log(customer.lastName)