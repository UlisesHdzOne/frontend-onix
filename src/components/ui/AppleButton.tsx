import { IonButton, IonSpinner } from "@ionic/react";
import "./AppleButton.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  fill?: "solid" | "clear" | "outline";
  size?: "small" | "default" | "large";
  expand?: "block" | "full";
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const AppleButton = ({
  children,
  onClick,
  fill = "solid",
  size = "default",
  expand,
  color,
  disabled,
  loading = false,
}: Props) => {
  return (
    <IonButton
      className="apple-button"
      onClick={onClick}
      fill={fill}
      size={size}
      expand={expand}
      disabled={disabled || loading}
      style={{ color }}
    >
      {loading ? <IonSpinner name="crescent" /> : children}
    </IonButton>
  );
};
