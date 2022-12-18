import type { ComponentType } from 'react'

export interface ToolMeta {
  url: string
  name: string
  category: string
  description: string
  component: ComponentType
}
