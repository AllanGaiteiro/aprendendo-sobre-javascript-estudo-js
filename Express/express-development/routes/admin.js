///// Rotas
const express = require('express')
const router = express.Router()



/// seguir esse padrao
router.get('/', (req,res) => {
    res.render('admin/index')
})


router.get('/categorias', (req,res) => {
    res.render('admin/categorias')
})
router.get('/categorias/add', (req,res) => {
    res.render('admin/addcategorias')
})


/// exportar para o arquivo js principal
module.exports = router