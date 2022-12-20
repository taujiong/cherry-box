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

      <IonContent>
        {tools.map(({ id, ...restMeta }) => (
          <ToolCard key={id} url={id} {...restMeta} />
        ))}
      </IonContent>
    </IonPage>
  )
}
