import fastifyJwt from '@fastify/jwt'
import { fastify } from 'fastify'
import { AuthRoute } from './auth/auth'
import fastifyCors from '@fastify/cors'

const app = fastify()
app.register(fastifyCors, {
  origin: true,
})
app.register(fastifyJwt, {
  secret: 'jwtPractice',
})
app.register(AuthRoute)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP SERVER RUNNING ON http://localhost:3333')
  })
