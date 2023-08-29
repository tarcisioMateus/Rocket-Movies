import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

function AuthProvider ({ children }) {
  const [data, setData] = useState({})

  async function login({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@rocketMovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketMovies:token', token)

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

  useEffect(() => {
    const user = localStorage.getItem('@rocketMovies:user')
    const token = localStorage.getItem('@rocketMovies:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setData({
      token,
      user: JSON.parse(user)
    })
  }, [])

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