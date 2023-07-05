import { Schema, model } from 'mongoose'

const featureSchema = new Schema({
  label: String,
  value: String,
})

const productSchema = new Schema({
  fName: String,
  lName: String,
  mobile: String,
  email: String,
  password: String,
  "image": String,
  "title": String,
  "subtitle": String,
  "excerpt": String,
  "description": String,
  "price": Number,
  "warranty": String,
  "features": [featureSchema],
})

export default model('product', productSchema)