import * as express from "express";
import * as cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

//La siguiente línea se encarga de servir todas las rutas del frontend
app.use(express.static("./dist"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.get("/env", (req, res)=>{
    res.send(process.env.ENVIRONMENT);
});

app.get("*", (req, res)=>{
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})