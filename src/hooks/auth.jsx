import { createContext, useContext, useState } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [data, setData] = useState({})

  async function login({ email, password }) {
    try {
      const response = await api.get('/sessions', { email, password })
      const { token, user } = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to login into account, try again later')
      }
    }
  }

  return (
    <AuthContext.Provider value={ { login, user: data.user } }>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return ( useContext(AuthContext) )
}

export { AuthProvider, useAuth }