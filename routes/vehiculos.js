const {Router}=require ('express')
const router = Router()// Obtener la función Router
const {getVehiculo, postVehiculo, deleteVehiculo, pathVehiculo, putVehiculo}= require('../controllers/vehiculo') 
const { route } = require('./usuarios')

router.get('/',getVehiculo)
router.post('/',postVehiculo)
router.delete('/',deleteVehiculo)
router.patch('/',pathVehiculo)
router.put('/',putVehiculo)


module.exports = router