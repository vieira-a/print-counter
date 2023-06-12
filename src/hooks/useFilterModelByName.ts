import { useCallback, useState } from "react";
import { IModel } from "@/common/interfaces/IModel";
import { getModelByName } from "@/services/serviceModel";

const useFilterModelByName = () => {
  const [modelByModelName, setModelByModelName] = useState<IModel[]>([]);

  const showModelByName = useCallback(async (expression: string) => {
    try {
      const data = await getModelByName(expression);
      setModelByModelName(data.model);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { modelByModelName, showModelByName };
};

export default useFilterModelByName;
