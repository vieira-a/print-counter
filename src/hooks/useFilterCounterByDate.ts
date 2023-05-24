import { getCounterByDate } from "@/services/servicesCounter";
import { ICounter } from "@/common/interfaces/ICounter";
import { useCallback, useState } from "react";

const useFilterCounterByDate = () => {
  const [counterByDate, setCounterByDate] = useState<ICounter[]>([]);

  const showCounterByDate = useCallback(
    async (startDate: string, endDate: string) => {
      try {
        const data = await getCounterByDate(startDate, endDate);
        setCounterByDate(data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return { counterByDate, showCounterByDate };
};

export default useFilterCounterByDate;
