const helperFunction = () => {
  console.log("I'm helping!")
}

const getCats = (req, res) => {
  res.send({
    message: 'Getting Cats'
  })
  helperFunction()
}

const getCatById = (req, res) => {
  res.send({
    message: `Found cat with an ID of ${req.params.catId}`
  })
}

const bothParams = (req, res) => {
  res.send({
    message: `Getting ${req.params.catName}, a cat with an ID of ${req.params.catId}`
  })
}

const getWow = (req, res) => {
  res.send({
    message: "Wow, that's a very detailed path for no reason!"
  })
}

const getCatDetails = (req, res) => {
  res.send({
    "message": `My cats name is ${req.query.catName}, and they are ${req.query.catAge} years old.`
  })
}

const createCatDetails = (req, res) => {
  res.send(req.body)
}

module.exports = {
  getCats,
  getCatById,
  bothParams,
  getWow,
  getCatDetails,
  createCatDetails
}
