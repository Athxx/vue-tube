import { UserInfo } from '../types/store.d'

const key = 'x-user'

export function hasToken() {
  const user = localStorage.getItem(key)
  return user && JSON.parse(user).token !== ''
}

export function getToken(): string {
  const user = localStorage.getItem(key)
  return user ? JSON.parse(user).token : ''
}

export function getUser(): UserInfo | undefined {
  const user = localStorage.getItem(key)
  return user ? JSON.parse(user) : undefined
}

export function setUser(user: UserInfo) {
  localStorage.setItem(key, JSON.stringify(user))
}

export function delUser() {
  localStorage.removeItem(key)
}
