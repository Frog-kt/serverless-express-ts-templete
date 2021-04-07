import config from './config'
import app from './app'
const PORT = config.port
const NODE_ENV = config.node_env

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
  console.log(`Runnning mode:${NODE_ENV}`)
})
