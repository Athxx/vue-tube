import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

export function setupStore(app: App<Element>) {
  const p = createPinia()
  p.use(piniaPersist)
  app.use(p)
}
