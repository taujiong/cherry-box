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
import { useEffect, useState } from 'react'
import { DayItem } from '../components/DayItem'
import { PinnedDay } from '../components/PinnedDay'
import type { MattersDay } from '../models'
import { getDays } from '../services'

export const ShowPage = () => {
  const [days, setDays] = useState<MattersDay[]>([])

  useEffect(() => {
    getDays().then((days) => setDays(days))
  }, [])

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
        {days.length === 0 ? null : (
          <>
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
          </>
        )}
      </IonContent>
    </IonPage>
  )
}
