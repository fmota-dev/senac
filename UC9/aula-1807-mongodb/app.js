require("dotenv").config()
const mongoose = require("mongoose")

connectarDB().catch((err) => console.log(err))

async function connectarDB() {
  await mongoose.connect(process.env.DATABASE_URL)
}

const kittySchema = new mongoose.Schema({
  name: String,
})

const Kitten = mongoose.model("Kitten", kittySchema)

const salvarGato = async (gato) => {
  await gato.save()
  console.log(`Gato ${gato.name} salvo com sucesso!`)
}

const meliodas = new Kitten({ name: "Meliodas" })
const silence = new Kitten({ name: "Silence" })

salvarGato(silence)
salvarGato(meliodas)
