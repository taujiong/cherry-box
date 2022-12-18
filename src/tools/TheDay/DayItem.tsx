import { IonCard, IonCardContent, IonItem, IonLabel, IonNote } from '@ionic/react'
import { differenceInDays, format } from 'date-fns'
import type { FC } from 'react'
import type { MattersDay } from './models'

export const DayItem: FC<MattersDay> = ({ name, targetDate }) => {
  return (
    <IonItem lines="none">
      <IonLabel>{name}还有</IonLabel>
      <IonLabel className="text-end">{differenceInDays(targetDate, new Date())} 天</IonLabel>
    </IonItem>
  )
}

export const PinnedDay: FC<MattersDay> = ({ name, targetDate }) => {
  return (
    <IonCard>
      <IonCardContent className="h-24 flex justify-between items-center">
        <div className="flex flex-col">
          <IonLabel>{name}还有</IonLabel>
          <IonNote>目标日：{format(targetDate, 'yyyy年MM月dd日')}</IonNote>
        </div>
        <div>{differenceInDays(targetDate, new Date())} 天</div>
      </IonCardContent>
    </IonCard>
  )
}
