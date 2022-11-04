import Moneda from '../models/monedas.js'
import MonedaUsuario from '../models/monedaUsuario.js'

export const getAllMonedas = async (req, res) => {
  const response = await Moneda.find()
  res.json(response)
}

export const createMoneda = async (req, res) => {
  const { name, simbolo, valor } = req.body
  const newMoneda = new Moneda({ name, simbolo, valor })
  newMoneda.save()
  return res.json(newMoneda)
}


export const getOneMoneda = async (req, res) => {
  const moneda = await Moneda.findById(req.params.id)

  return res.json(moneda)
}


export const updateMoneda = async (req, res) => {
  return res.json('updateMoneda')
}


export const deleteMoneda = async (req, res) => {
  return res.json('deleteMoneda')
}



export const createMonedaCliente = async (req, res) => {
  const { moneda, userId } = req.body
  if (moneda.length > 1) {
    await MonedaUsuario.findOneAndDelete({ userId: userId })
    return res.status(200)
  }
  const oldMoneda = await MonedaUsuario.find({ userId })
  if (oldMoneda.length > 0) {
    const newMoneda = await MonedaUsuario.findOneAndUpdate({ userId: userId }, { moneda: moneda, userId: userId }, { new: true })
    return res.json(newMoneda)
  }
  const newMonedaUsuario = new MonedaUsuario({
    moneda,
    userId
  })
  await newMonedaUsuario.save()
  return res.json(newMonedaUsuario)
}


export const getMonedaCliente = async (req, res) => {
  const resp = await MonedaUsuario.findOne({ userId: req.params.id })
  return res.json(resp)
}


export const updateMonedaCliente = (req, res) => {
  return res.json('updateMonedaCliente')
}


export const deleteMonedaCliente = (req, res) => {
  return res.json('deleteMonedaCliente')
}













