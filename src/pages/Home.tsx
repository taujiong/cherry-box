import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import type { FC } from 'react'
import { ToolCard } from '../components/ToolCard'
import { tools } from '../tools'

export const HomePage: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>樱桃工具箱</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="leading-10" size="large">
              樱桃工具箱
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {tools.map((meta) => (
          <ToolCard key={meta.name + Math.random()} {...meta} />
        ))}
      </IonContent>
    </IonPage>
  )
}
