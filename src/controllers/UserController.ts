import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../database/repositories/UserRepository'



class UserController{
    async create(req:Request, res:Response){
        
        const userRepository = getCustomRepository(UserRepository)

        const { firstName, lastName, email, login, password } = req.body


        const userInDatabase = await userRepository.findOne({where:{email}})

        
        if(!firstName || !email || !login || !password){
            return res.status(400).json({"message": "You should fill all fields!"})
        }

        if(userInDatabase){
            return res.status(400).json({"message": "Email already in use!!"})
        }

        
        const user = userRepository.create({
            first_name: firstName,
            last_name: lastName,
            email,
            login,
            password
        })

        await userRepository.save(user)

        res.status(201).json({"message": "User created with success!"})
    }    
}

export default new UserController()