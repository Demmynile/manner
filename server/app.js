import Fastify from "fastify";
import { connectDB } from "./src/config/connect.js";
import "dotenv/config"
import { PORT } from "./src/config/config.js";
import { admin, buildAdminRouter } from "./src/config/setup.js";

const start = async () => {
    await connectDB(process.env.MONGO_URI)

    const app = Fastify()

    await buildAdminRouter(app)
    app.listen({port: PORT , host : "0.0.0.0"} , 
    (err ,add) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Manner started on http://localhost:${PORT}${admin.options.rootPath}`)
        }
    } );

};

start()


