const {Router}=require ('express')
const router = Router()// Obtener la función Router


router.get('/',(req,res)=>{
//console.log('GET API')
//Desestructuración de los parametros enviados
// con el método GET
const { referencia, nombre} = req.query
    res.json({
        msg: 'GET API',
        referencia,
        nombre 
    })
})

//post: enviar  información(Registrar)
router.post('/', (req,res)=>{
    const{referencia, nombre, precio}= req.body;
    res.json({
        msg:  'POST  API',
        referencia,
        nombre,
        precio
    })
})


//put: Modificar información
router.put('/', (req,res)=>{
    res.json({
        msg:  'PUT  API'
    })
})

//Delete: Eliminar Información 
router.delete('/', (req,res)=>{
    res.json({
        msg:  'DELETE  API'
    })
})


//patch: Actualizar parcialmente información  
router.patch('/', (req,res)=>{
    res.json({
        msg:  'PATCH API'
    })
})


//exportar 

module.exports= router 