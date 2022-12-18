import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import type { FC } from 'react'

interface ToolCardProps {
  url: string
  name: string
  category: string
  description: string
}

export const ToolCard: FC<ToolCardProps> = ({ url, name, category, description }) => (
  <IonCard routerLink={url}>
    <IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
      <IonCardSubtitle>{category}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>{description}</IonCardContent>
  </IonCard>
)
