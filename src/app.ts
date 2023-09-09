import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import * as bcrypt from 'bcrypt';

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    registerBike(bike: Bike){
        for(const rBike of this.bikes) {
            if(rBike.id === bike.id){
                throw new Error("Duplicate Bike")
            }
        }
        this.bikes.push(bike)
    }

    findUser(email: string): User | undefined {
        return this.users.find(user => { return user.email === email})
    }

    async registerUser(user: User): Promise<void >{
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        console.log(hashedPassword)
        this.users.push({ ...user, password: hashedPassword });
    }

    async authenticateUser(userEmail: string, password: string): Promise<boolean> {
        const rUser = this.users.find(e => e.email === userEmail)
        if(!rUser){
            return false
        }
        const passwordMatch = await bcrypt.compare(password, rUser.password)
        return passwordMatch
    }

    async registerAndAuthenticateUser(user: User): Promise<void> {
        const password = user.password
        try {
            await this.registerUser(user);
            const isAuthenticated = await this.authenticateUser(user.email, password);
            if (isAuthenticated) {
                console.log('Usuário registrado e autenticado com sucesso.');
            } else {
                console.log('Erro ao autenticar o usuário após o registro.');
            }

        } catch (error) {
            console.error('Erro ao registrar o usuário:', error);
        }
    }

    listUsers() {
        console.log(this.users);
      }

      listBike(){
        console.log(this.bikes)
        
      }

      listRent(){
        console.log(this.rents)
      }



    removeUser(user: User ){
        let iU: number = this.users.indexOf(user);
        if (iU === -1) throw new Error('Usuario nao encontrado.');
        this.users.splice(iU, 1);
    }
    
    removeUserByEmail(email: string){
        let U = this.users.find(u => u.email === email);
        if (U === undefined) throw new Error('Usuario nao encontrado.');
        this.removeUser(U);
    }

    //rentBike2(Mod: Bike){                   função para alugar somente pelo nome
        //const Modelo = Mod.name
        //let rBike = Bike
        //let BIKE = this.bikes.filter(b => b.name === Modelo)
        //if(BIKE.length === 0) throw new Error('Bike não existe')

        //let BikeEncontra = BIKE.find(e => e.Rented === !Mod.Rented)

        //if(!BikeEncontra) throw new Error('Bike alugada')
        //BikeEncontra.Rented === true
        //console.log('Bicicleta com o modelo ${name} foi alugada.');
        
    //}

    rentBike(infoBike: Bike, userEmail: string, startDate: Date, endDate:Date): Rent{
        let rBike = infoBike
        let iBike = this.rents.filter(t => t.bike === infoBike)

        let rUser = this.users.find(u=>u.email === userEmail)
        if(rUser === undefined) throw new Error('Usuário não cadastro')

        
        if(infoBike === undefined) throw new Error('Bike não existe')
        if(rBike.Rented === true) throw new Error('Bike alugada')

        let newRent = Rent.create(iBike, infoBike,rUser,startDate,endDate)
        this.rents.push(newRent)
        rBike.Rented = true
        console.log(`ID da bicicleta alugada: ${infoBike.id}`);
        return newRent
    }

    retornarBike(ID: Bike){
        const iD = ID.id
        let BIKE = this.bikes.find(BIKE => BIKE.id === iD)
        if(BIKE === undefined) throw new Error('Bike não existe')
        if(BIKE.Rented == true)
            BIKE.Rented = false
            console.log('Bike devolvida.');
    }
}
