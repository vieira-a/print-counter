import {
  CheckmarkFilled,
  WarningFilled,
  ErrorFilled,
  Close,
} from "@carbon/icons-react";

interface NotificationProps {
  message?: string;
  theme?: "success" | "warning" | "error";
  setShowNotification: (state: boolean) => void;
}

export default function Notification({
  message,
  theme,
  setShowNotification,
}: NotificationProps) {
  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div
      className={`p-4 flex justify-between w-full mx-auto 
      ${
        theme === "success" &&
        "bg-notification-success-bg border border-notification-success border-l-[3px] border-l-notification-success"
      }
      ${
        theme === "warning" &&
        "bg-notification-warning-bg border border-notification-warning border-l-[3px] border-l-notification-warning"
      }
      ${
        theme === "error" &&
        "bg-notification-error-bg border border-notification-error border-l-[3px] border-l-notification-error"
      }
      `}
    >
      <div className="flex gap-4 ">
        <div>
          {theme === "success" && (
            <CheckmarkFilled className="text-notification-success" />
          )}
          {theme === "warning" && (
            <WarningFilled className="text-notification-warning" />
          )}
          {theme === "error" && (
            <ErrorFilled className="text-notification-error" />
          )}
        </div>
        <div className="text-xs">{message}</div>
      </div>
      <button onClick={closeNotification}>
        <Close />
      </button>
    </div>
  );
}
