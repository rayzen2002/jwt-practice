import { NextApiRequest } from 'next'

export async function GET(request: NextApiRequest) {
  // const redirectTo = request.cookies.get('redirectTo')?.value
  const { name } = request.body
  console.log(name)
  // const registerResponse = await axios.post('/register', {})
}
