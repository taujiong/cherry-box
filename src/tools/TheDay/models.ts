export enum TimeUnit {
  Day,
  Week,
  Month,
  Year,
}

export interface TimeInterval {
  count: number
  unit: TimeUnit
}

export interface MattersDay {
  name: string
  targetDate: Date
  pinToTop: boolean
  repeat: boolean
  remindInterval: TimeInterval | false
}
