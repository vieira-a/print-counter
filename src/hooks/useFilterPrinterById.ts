import { useCallback, useState } from "react";
import { IPrinter } from "@/common/interfaces/IPrinter";
import { getPrinterById } from "@/services/servicePrinter";

const useFilterPrinterById = () => {
  const [printerById, setPrinterById] = useState<IPrinter[]>([]);

  const showPrinterById = useCallback(async (printerId: string) => {
    try {
      const data = await getPrinterById(printerId);
      setPrinterById(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { printerById, showPrinterById };
};

export default useFilterPrinterById;
