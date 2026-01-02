import Koa from "koa";
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";
import router from "./routes.js"
import cors from 'koa-cors2';
import bodyParser from 'koa-bodyparser';
import 'dotenv/config';

// crear instancia de Koa
const app = new Koa();

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());
app.use(cors())
app.use(bodyParser());

// koa router
app.use(router.routes());

const port = process.env.PORT

app.listen(port, () => {
    console.log("Escuchando en puerto 3000");
});
