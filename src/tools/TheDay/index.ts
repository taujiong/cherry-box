import type { ToolMeta, ToolRoute } from '../../models'
import { AddPage } from './Pages/AddPage'
import { ShowPage } from './Pages/ShowPage'

const THE_DAY_ID = 'the-day'

export const TheDayMeta: ToolMeta = {
  id: THE_DAY_ID,
  name: '倒数日',
  category: '时间管理',
  description: '倒数日，可以是一项预定的规划，也可以是一份美好的期待',
}

export const routes: ToolRoute[] = [
  {
    path: THE_DAY_ID,
    component: ShowPage,
  },
  {
    path: THE_DAY_ID + '/add',
    component: AddPage,
  },
]
