export const BASE_URL = process.env.BASE_LOCAL_URL

export const API = {
  AUTH: {
    REGISTER: '/api/auth/resgister',
    LOGIN: '/api/auth/login',
    PROFILE: '/api/auth/profile',
  },

  USERS: {
    ALL_USERS:'/api/users',
    USER_BY_ID: (id: any) => `/api/users/${id}`,
    CREATE_USER: '/api/users',
    UPDATE_USER: (id: any) => `/api/users/${id}`,
    DELETE_USER: (id: any) => `/api/users/${id}`,
  },

  TASKS: {
    GET_DATA: '/api/tasks'
  }
}

