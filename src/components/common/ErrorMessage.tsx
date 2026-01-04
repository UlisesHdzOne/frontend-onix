import React from "react";
import { IonCard, IonCardContent, IonButton, IonIcon, IonText } from "@ionic/react";
import { alertCircleOutline, refreshOutline } from "ionicons/icons";

interface ErrorMessageProps {
  message: string;
  title?: string;
  onRetry?: () => void;
  retryText?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  title = "Error",
  onRetry,
  retryText = "Reintentar",
}) => {
  return (
    <IonCard style={{ margin: "1rem", textAlign: "center" }}>
      <IonCardContent>
        <div style={{ marginBottom: "1rem" }}>
          <IonIcon icon={alertCircleOutline} size="large" color="danger" />
        </div>
        <IonText color="danger">
          <h3 style={{ margin: "0.5rem 0" }}>{title}</h3>
        </IonText>
        <p style={{ margin: "1rem 0", color: "var(--ion-color-medium)" }}>{message}</p>
        {onRetry && (
          <IonButton onClick={onRetry} fill="outline" color="primary" style={{ marginTop: "1rem" }}>
            <IonIcon slot="start" icon={refreshOutline} />
            {retryText}
          </IonButton>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default ErrorMessage;
