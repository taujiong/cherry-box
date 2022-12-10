import type { CapacitorConfig } from '@capacitor/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CapacitorConfig = {
  appId: 'com.taujiong.cherrybox',
  appName: '樱桃工具箱',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: process.env.DEV_URL,
    cleartext: Boolean(process.env.DEV_URL),
  },
}

export default config
