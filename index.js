const express = require('express')
const app = express();

//configurando o ejs
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res) => {
    let nome = req.params.nome
    let lang = req.params.lang
    res.render('index',{
        nome:nome,
        lang:lang,
        empresa:'Guia do proramador',
        inscritos:8000
    })
});

app.listen(8080,() =>{
    console.log("App rodando!")
});