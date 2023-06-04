import { useEffect, useState } from "react";
import { IModel, IModelProvider } from "@/common/interfaces/IModel";
import ModelContext from "@/contexts/modelContext";
import { getModels } from "@/services/serviceModel";

export default function ModelProvider({ children }: IModelProvider) {
  const [model, setModel] = useState<IModel[]>([
    {
      _id: "",
      model_brand: "",
      model_name: "",
      model_oid_snmp_printed: "",
      model_oid_snmp_copied: "",
      model_oid_snmp_toner_level: "",
    },
  ]);

  const [modelGrid, setModelGrid] = useState<IModel[]>([]);
  const [shouldUpdateModel, setShouldUpdateModel] = useState<boolean>(false);

  const getAllModels = async () => {
    const data = await getModels();
    setModel(data);
    setShouldUpdateModel(false);
  };

  useEffect(() => {
    getAllModels();
  }, [shouldUpdateModel]);

  const modelContextValue = {
    model,
    setModel,
    modelGrid,
    setModelGrid,
    shouldUpdateModel,
    setShouldUpdateModel,
  };

  return (
    <ModelContext.Provider value={modelContextValue}>
      {children}
    </ModelContext.Provider>
  );
}
