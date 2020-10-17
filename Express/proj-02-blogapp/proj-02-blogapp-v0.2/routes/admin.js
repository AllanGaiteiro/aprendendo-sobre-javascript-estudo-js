///// Rotas
const express = require('express')
const router = express.Router()



/// seguir ese padrao
router.get('/', (req,res) => {
    res.send('Pagina principal')
})

router.get('/poss', (req,res) => {
    res.send('Pagina de Post')
})


router.get('/categoria', (req,res) => {
    res.send('Pagina de Categoria')
})

/// exportar para o arquivo js principal
module.exports = router