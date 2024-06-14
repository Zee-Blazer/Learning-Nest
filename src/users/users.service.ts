import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Donald Micheal",
            "email": "donald.micheal@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "David Joshua",
            "email": "david.joshua@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Tabitha Paul",
            "email": "tabitha.paul@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 4,
            "name": "Musa Abdul",
            "email": "musa.abdul@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id": 5,
            "name": "Favour Daniel",
            "email": "favour.daniel@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id": 6,
            "name": "Faith Moses",
            "email": "faith.moses@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id": 7,
            "name": "Ebube David",
            "email": "ebuba.dabid@gmail.com",
            "role": "ENGINEER"
        }
    ];

    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
        if(role){
            return this.users.filter( user => user.role == role )
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find( user => user.id == id );

        return user;
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort( (a,b) => b.id - a.id );
        const newUser = { id: usersByHighestId[0].id + 1, ...createUserDto };

        this.users.push(newUser);
        return newUser;
    }

    update(
        id: number, 
        updateUserDto: UpdateUserDto
    ){
        this.users = this.users.map( user => {
            if(user.id == id){
                return { ...user, ...updateUserDto }
            }
            return user;
        } )

        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter( user => user.id !== id );

        return removedUser;
    }

}
