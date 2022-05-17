import { defineStore } from 'pinia'
import { UserInfo } from '../types/store.d'
import { getToken, setUser, delUser } from '../utils/auth'

export const userStore = defineStore('user', {
  state: (): UserInfo => ({
    uid: '',
    token: '',
    name: '',
    avatar: '',
  }),
  getters: {
    UID(): string | number {
      return this.uid
    },
    Token(): string {
      return this.token || getToken()
    },
    Name(): string {
      return this.name
    },
    Avatar(): string {
      return this.avatar
    },
  },
  actions: {
    async set(user: UserInfo) {
      this.uid = user.uid
      this.token = user.token
      this.name = user.name
      this.avatar = user.avatar
      setUser(user)
    },
    async del() {
      this.uid = ''
      this.token = ''
      this.name = ''
      this.avatar = ''
      delUser()
    },
  },
})
