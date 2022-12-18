import type { MattersDay } from './models'

export const getDays = (): Promise<MattersDay[]> => {
  const days = Array<MattersDay>(20).fill({
    name: '爱情纪念日',
    targetDate: new Date(2023, 0, 18),
    pinToTop: false,
    repeat: false,
    remindInterval: false,
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(days)
    }, 500)
  })
}
