import React from "react";
import { IonSpinner, IonText } from "@ionic/react";

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Cargando...",
  fullScreen = false,
}) => {
  const containerStyle: React.CSSProperties = fullScreen
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      };

  return (
    <div style={containerStyle}>
      <IonSpinner name="crescent" />
      {message && (
        <IonText color="medium" style={{ marginTop: "1rem" }}>
          {message}
        </IonText>
      )}
    </div>
  );
};

export default LoadingSpinner;
