import request from 'supertest'
import createConnection from '../database'
import app from '../app'

describe("User controller", () => {
    beforeAll( async () => {
        await createConnection().then(async connection => {
            await connection.runMigrations()
        })
    })

    it("create user", async () => {
        const response = await request(app).post("/users").send({
            "firstName": "Rodrigo",
            "lastName": "Tavares",
            "email": "test@test.com",
            "password": "123"
        })

        expect(response.status).toBe(201)
    })

    it("get all users", async () => {
        const response = await request(app).get("/users")

        expect(response.status).toBe(200)
    })

    it("get user by id", async () => {
        const response = await request(app).get("/users/1")

        expect(response.status).toBe(200)
    })

    it("Update user first name and last name", async () => {
        const response = await request(app).put("/users/1").send({
            "newFirstName":"Maria",
            "newLastName":"Antonia",
            "currentPassword":"123"
        })

        expect(response.status).toBe(200)
    })

    it("Delete user", async () => {
        const response = await request(app).delete("/users/1").send({
            "password":"123"
        })

        expect(response.status).toBe(200)
    })
})

