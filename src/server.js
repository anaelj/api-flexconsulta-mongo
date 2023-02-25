import "dotenv/config";
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: "json" };
import morgan from "morgan";
import auth0Authenticate from "./share/auth/login";
import jwtCheck from "./share/auth/checkToken";
import checkPermission from "./share/auth/checkPermissions";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));
app.use(cookieParser());
app.post("/v1/login", auth0Authenticate);
app.use("/v1", jwtCheck, checkPermission);
app.use("/v1", routes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send({ message: error?.message });
});

app.listen(process.env.PORT, async () => {
  console.log(`App started on ${process.env.PORT} 👍 `);
});
