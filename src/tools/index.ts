import type { ToolMeta } from '../models'
import { routes as theDayRoutes, TheDayMeta } from './TheDay'

export const TOOL_URL_PREFIX = '/tools'

export const tools: ToolMeta[] = [
  TheDayMeta,
  // add more
].map(({ id, ...restMeta }) => ({
  id: `${TOOL_URL_PREFIX}/${id}`,
  ...restMeta,
}))

export const routes = [
  ...theDayRoutes,
  // add more
].map(({ path, component }) => ({
  path: `${TOOL_URL_PREFIX}/${path}`,
  component,
}))
