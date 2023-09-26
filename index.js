const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const datas = require("./datas.json");

const app = express();

const port = 3000;

// liberando o acesso referente ao erro Access-Control-Allow-Origin do frontend
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/cadastros", (req, res) => {
    //return res.json(datas);
    const result = { name: 'emerson', instagram: 'emersonbrogadev' };
    return res.json(result);
});

app.post('/cadastro', (req, res) => {
    const name = req.body.name;
    const site = req.body.site;
    return res.json([site, name]);
  });

app.listen(port, () => {
    console.log(`Rodando Server, port ${port}`);
});
