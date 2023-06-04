import { useCallback, useState } from "react";
import { IModel } from "@/common/interfaces/IModel";
import { getModelById } from "@/services/serviceModel";

const useFilterModelById = () => {
  const [modelById, setModelById] = useState<IModel>();

  const showModelById = useCallback(async (modelId: string) => {
    try {
      const data = await getModelById(modelId);
      setModelById(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { modelById, showModelById };
};

export default useFilterModelById;
