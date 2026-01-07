import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { LoginForm } from "../components/forms/LoginForm";

export const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton slot="start" className="ion-padding-start">
            Menú
          </IonButton>
          <IonTitle className="ion-text-center">CarWash</IonTitle>

          <IonButton slot="end" className="ion-padding-end">
            Perfil
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};
