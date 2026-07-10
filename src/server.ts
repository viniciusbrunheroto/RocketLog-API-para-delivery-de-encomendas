import { app } from "@/app";
import { env } from "./env";


const PORT = env.PORT

console.log(process.env.PORT)
console.log(env)

app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`)
})