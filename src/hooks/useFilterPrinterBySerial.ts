import { useCallback, useState } from "react";
import { IPrinter } from "@/common/interfaces/IPrinter";
import { getPrinterBySerial } from "@/services/servicePrinter";

const useFilterPrinterBySerial = () => {
  const [printerBySerial, setPrinterBySerial] = useState<IPrinter[]>([]);

  const showPrinterBySerial = useCallback(async (serial: string) => {
    try {
      const data = await getPrinterBySerial(serial);
      setPrinterBySerial(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { printerBySerial, showPrinterBySerial };
};

export default useFilterPrinterBySerial;
