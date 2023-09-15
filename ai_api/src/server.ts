import { fastify } from 'fastify'
import { getAllPRomptsRoute } from './routes/get-all-prompts'

const app = fastify();

app.register(getAllPRomptsRoute);

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})