import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Instructores</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h2 style={{ fontSize: "2rem", margin: 0 }}>0</h2>
                  <p>Total registrados</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Cursos</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h2 style={{ fontSize: "2rem", margin: 0 }}>0</h2>
                  <p>En progreso</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Conductores</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h2 style={{ fontSize: "2rem", margin: 0 }}>0</h2>
                  <p>Activos</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="6" sizeLg="3">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Vehículos</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <h2 style={{ fontSize: "2rem", margin: 0 }}>0</h2>
                  <p>Disponibles</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div style={{ marginTop: "2rem" }}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Bienvenido a Carwash App</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                `Esta es tu aplicación de gestión para lavado de autos. Usa el menú lateral
                paranavegar entre las diferentes secciones`
              </p>
              <p>
                Comienza explorando la sección de Instructores para agregar tu primer instructor.
              </p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
