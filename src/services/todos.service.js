import api from './api.service'

const todosService = {
  getTodos() {
    return api.get('/api/todos').then((r) => r.data)
  },

  getTodo(todoId) {
    return api.get(`/api/todos/${todoId}`).then((r) => r.data)
  },

  addTodo(payload) {
    return api.post('/api/todos', payload).then((r) => r.data)
  },

  updateTodo(todoId, payload) {
    return api.patch(`/api/todos/${todoId}`, payload).then((r) => r.data)
  },

  deleteTodo(todoId) {
    return api.delete(`/api/todos/${todoId}`).then((r) => r.data)
  },
}

export default todosService