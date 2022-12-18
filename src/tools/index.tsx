import { Route } from 'react-router-dom'
import type { ToolMeta } from '../data'
import { TheDayMeta } from './TheDay'

export const tools: ToolMeta[] = [TheDayMeta]

export const ToolRoutes = tools.map(({ url, component }) => (
  <Route key={url} path={url} component={component} />
))
