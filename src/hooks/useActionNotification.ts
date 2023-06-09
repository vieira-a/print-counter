import { useState } from "react";
import { IActionNotification } from "@/common/interfaces/IActionNotification";

const useActionNotification = () => {
  const [actionNotification, setActionNotification] =
    useState<IActionNotification>({
      status: null,
      message: "",
    });

  const showActionNotification = (notification: IActionNotification) => {
    setActionNotification(notification);
    setTimeout(() => {
      setActionNotification({ status: null, message: "" });
    }, 3000);
  };
  return { actionNotification, showActionNotification };
};

export default useActionNotification;
