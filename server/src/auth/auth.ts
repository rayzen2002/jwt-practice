import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
export async function AuthRoute(app: FastifyInstance) {
  try {
    app.post('/register', async (request) => {
      const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
      const userInfo = userSchema.parse(request.body)
      console.log(userInfo)
      let user = await prisma.user.findUnique({
        where: {
          id: userInfo.email,
        },
      })
      console.log(user)
      if (!user) {
        user = await prisma.user.create({
          data: {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
          },
        })
      }
      const token = app.jwt.sign(
        {
          name: user.name,
        },
        {
          sub: user.id,
          expiresIn: '30 days',
        },
      )
      console.log(token)
      return token
    })
  } catch (error) {
    return `asdasd`
  }
  app.get('/hello', () => {
    return 'hello'
  })
}
