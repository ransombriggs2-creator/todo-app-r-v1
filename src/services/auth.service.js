import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_URL || ''

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

const authService = {
  async login(email, password) {
    const res = await client.post('/api/auth/login', { email, password })
    return res.data
  },

  async register(email, password) {
    const res = await client.post('/api/auth/register', { email, password })
    return res.data
  },

  async refresh(refreshToken) {
    const res = await client.post('/api/auth/refresh', { refreshToken })
    return res.data
  },

  async logout(refreshToken) {
    const res = await client.post('/api/auth/logout', { refreshToken })
    return res.data
  },

  async logoutAll(refreshToken) {
    const res = await client.post('/api/auth/logout-all', { refreshToken })
    return res.data
  },
}

export default authService