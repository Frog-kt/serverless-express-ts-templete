import app from './app'
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
  console.log(`Runnning mode:${NODE_ENV}`)
})
