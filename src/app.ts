import "reflect-metadata"
import './database'
import Express from "express"
import router from "./router"

const app = Express()

app.use(Express.json())
app.use(router)

export default app