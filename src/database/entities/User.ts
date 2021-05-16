import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

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
    login: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date
}