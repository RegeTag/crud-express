import "reflect-metadata"
import connection from './database'
import Express from "express"
import router from "./router"

connection().then( () => console.log("Connected to DB!"))

const app = Express()

app.use(Express.json())
app.use(router)

export default app