const { model } = require('mongoose')
const Vehiculos = require('../models/vehiculo')



const getVehiculo = async (req,res)=>{
   // const {placa, color, precio} =req.query
   const vehiculos = await Vehiculos.find()
    res.json({
        msg:'Vehiculo GET API',
        vehiculos
    })

}

const postVehiculo =async (req,res)=>{
    //desestructuración de parámetros
    const{ placa, color,precio}=req.body
    //Crear el objeto
    const vehiculo1 = new Vehiculos({placa,color,precio})
    //Guardar el mongodb
    await vehiculo1.save();
    res.json ({
        msg:'Vehiculo POST API',
        vehiculo1
    })
}

const putVehiculo = async (req,res) =>{
    const {placa, color, precio} = req.body
    const vehiculo1 = await Vehiculos.findOneAndUpdate({placa: placa},{precio:precio,color: color})
    res.json({ 
        msg: "Vehiculo API APUT",
        vehiculo1
    })
}

const pathVehiculo = async (req,res) =>{
    const {placa, precio} = req.body
    const vehiculo1 = await Vehiculos.findOneAndUpdate({placa: placa},{precio:precio})
    res.json({ 
        msg: "Vehiculo API APUT",
        vehiculo1
    })
}

const deleteVehiculo = async(req,res) =>{
    const{placa}=req.query
    const vehiculo1 = await Vehiculos.findOneAndDelete({placa:placa}) 
    res.json({
        msg:"Vehiculo DELETE API",
        vehiculo1
    })
}



module.exports = {
    getVehiculo,
    postVehiculo,
    deleteVehiculo,
    pathVehiculo,
    putVehiculo
}


