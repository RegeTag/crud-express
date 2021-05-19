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

        res.status(201).json({"message":"User created!"})
    }

    async getAll(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.find({select:[ 'id', 'first_name', 'last_name', 'created_at']})

        return res.status(200).json(users)
    }

    async getOne(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const {id} = req.params

        const user = await userRepository.findOne({where:{id}, select:['id', 'first_name', 'last_name', 'created_at']})

        if(!user){
            return res.status(400).json({"message": "User not found!"})
        }

        return res.status(200).json(user)
    }

    async update(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const {id} = req.params

        const {firstName, lastName, password} = req.body

        const user = await userRepository.findOne({where:{id}})

        if(!user){
            return res.status(400).json({"message":"User not found!"})
        }  

        if(user.password != password){
            return res.status(400).json({"message": "Current password wrong!"})
        }

        const updatedUser = userRepository.create({
            ...user,
            first_name: !firstName ? user.first_name : firstName,
            last_name: !lastName ? user.last_name : lastName
        })

        await userRepository.save(updatedUser)

        return res.status(200).json({"message": "User updated with success!"})
    }

    async delete(req:Request, res:Response){
        const userRepository = getCustomRepository(UserRepository)

        const {id} = req.params

        const {password} = req.body

        const user = await userRepository.findOne({where: {id}})

        if(!user){
            return res.status(400).json({"message":"User not found!"})
        }

        if(password != user.password){
            return res.status(400).json({"message":"Wrong password!"})
        }

        await userRepository.remove(user)

        res.status(200).json({"message":"User deleted!"})
    }
}

export default new UserController()