import { App } from "./deps.ts";
import router from "./routes/index.ts";

const env = Deno.env.toObject();
const PORT = Number.parseInt(env.PORT) || 3000;
const app = new App();

app.use("/api", router);

app.listen({ port: PORT });
