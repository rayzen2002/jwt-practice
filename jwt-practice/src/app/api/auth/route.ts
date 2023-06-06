import axios from 'axios'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectTo = request.cookies.get('redirectTo')?.value
  const requestBody = 
  const registerResponse = await axios.post('/register', {})
}
