import { hash } from 'bcryptjs'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User{
    @PrimaryColumn()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @BeforeInsert()
    async hashPassword(){
        this.password = await hash(this.password, 12)
    }
}