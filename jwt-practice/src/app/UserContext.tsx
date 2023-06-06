import { redirect } from 'next/navigation'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'

type User = {
  name: string
  email: string
  avatarUrl: string
}
type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)
export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'jwtPractice.token': token } = parseCookies()
    if (token) {
      recoveryUserInformation().then((response: AuthContextType) => {
        // Trocar por chamada ao backend prob
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'jwtPractice.token', token, {
      maxAge: 60 * 60 * 24, // 24horas
    })

    api.defaults.headers.Authorization = `Bearer ${token}`
    setUser(user)
    redirect('/login')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
