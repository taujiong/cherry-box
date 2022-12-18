import type { ComponentType } from 'react'

export interface ToolMeta {
  id: string
  name: string
  category: string
  description: string
}

export interface ToolRoute {
  path: string
  component: ComponentType
}
