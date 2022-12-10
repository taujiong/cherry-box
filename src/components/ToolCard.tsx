import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import type { FC } from 'react'
import type { ToolMeta } from '../data'

export const ToolCard: FC<ToolMeta> = ({ url, name, category, description }) => (
  <IonCard routerLink={url}>
    <IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
      <IonCardSubtitle>{category}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>{description}</IonCardContent>
  </IonCard>
)
