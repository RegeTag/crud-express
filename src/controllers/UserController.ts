import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../database/repositories/UserRepository'



class UserController{
    async create(req:Request, res:Response){
        
        const userRepository = getCustomRepository(UserRepository)

        const { firstName, lastName, email, password } = req.body


        const userInDatabase = await userRepository.findOne({where:{email}})

        
        if(!firstName || !email || !password){
            return res.status(400).json({"message": "You should fill all fields!"})
        }

        if(userInDatabase){
            return res.status(400).json({"message": "Email already in use!!"})
        }

        
        const user = userRepository.create({
            first_name: firstName,
            last_name: lastName,
            email,
            password
        })

        await userRepository.save(user)

        res.sendStatus(201)
    }

    async getAll(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.find({select:[ 'id', 'first_name', 'last_name']})

        return res.status(200).json(users)
    }

    async getOne(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const {id} = req.params

        const user = await userRepository.findOne({where:{id}})

        if(!user){
            return res.status(400).json({"message": "User not found!"})
        }

        delete user.password 
        delete user.email 

        return res.status(200).json(user)
    }
}

export default new UserController()