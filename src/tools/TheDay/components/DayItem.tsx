import { IonItem, IonLabel } from '@ionic/react'
import { differenceInDays } from 'date-fns'
import type { FC } from 'react'
import type { MattersDay } from '../models'

export const DayItem: FC<MattersDay> = ({ name, targetDate }) => {
  return (
    <IonItem lines="none">
      <IonLabel>{name}还有</IonLabel>
      <IonLabel className="text-end">{differenceInDays(targetDate, new Date())} 天</IonLabel>
    </IonItem>
  )
}
