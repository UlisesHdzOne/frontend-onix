import { IonButton, IonSpinner } from "@ionic/react";
import "./AppleButton.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  fill?: "solid" | "clear" | "outline";
  size?: "small" | "default" | "large";
  expand?: "block" | "full";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
}

export const AppleButton = ({
  children,
  onClick,
  fill = "solid",
  size = "default",
  expand,
  disabled,
  loading = false,
  loadingText,
  className = "",
}: Props) => {
  return (
    <IonButton
      onClick={onClick}
      fill={fill}
      size={size} 
      expand={expand} 
      disabled={disabled || loading} 
      className={`apple-button ${className}`}
    >
      {loading ? (
        <span className="apple-button-content">
          <IonSpinner 
          name="crescent" 
          className="apple-button-spinner" 
          />
          <span className="apple-button-text">{loadingText || children}</span>
        </span>
      ) : (
        children
      )}
    </IonButton>
  );
};
