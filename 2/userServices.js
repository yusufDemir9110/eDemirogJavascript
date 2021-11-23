import DataError from "./dataError.js"
import {usersData} from "./usersData.js"

export default class UserService{
    constructor(loggerService){
        this.employees =[]
        this.customers=[]
        this.errors = []
        this.loggerService = loggerService
    }
    load(){
        for (const user of usersData) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    this.errors.push(new DataError("wrong user type", user))
                    break;
            }
        }
    }
    add(user){
        
        this.loggerService.log(user)
    }
    list(){
        return this.users
    }
    getById(id){
        
    }
}