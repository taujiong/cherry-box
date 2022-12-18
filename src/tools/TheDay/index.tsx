import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import type { ToolMeta } from '../../data'
import { DayItem, PinnedDay } from './DayItem'
import type { MattersDay } from './models'

const days: MattersDay[] = Array(20).fill({
  name: '爱情纪念日',
  targetDate: new Date(2023, 0, 18),
  pinToTop: false,
  repeat: false,
  remindInterval: false,
})

export const TheDay = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
          <IonTitle>倒数日</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="relative">
        <div slot="fixed" className="w-full">
          <PinnedDay {...days[0]} />
        </div>
        <div className="absolute w-full top-36 bottom-8 overflow-auto">
          <IonList>
            {days.map((day) => (
              <DayItem key={Math.random()} {...day} />
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

export const TheDayMeta: ToolMeta = {
  url: '/the-day',
  name: '倒数日',
  category: '时间管理',
  description: '倒数日，可以是一项预定的规划，也可以是一份美好的期待',
  component: TheDay,
}
