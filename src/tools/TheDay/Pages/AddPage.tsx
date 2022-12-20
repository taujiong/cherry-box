import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

export const AddPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>添加新日子</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div>添加</div>
      </IonContent>
    </IonPage>
  )
}
