import { useEffect, useState } from "react";
import { IModel, IModelProvider } from "@/common/interfaces/IModel";
import ModelContext from "@/contexts/modelContext";
import { getModels } from "@/services/serviceModel";
import useFilterModelByName from "@/hooks/useFilterModelByName";

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
  const [searchModel, setSearchModel] = useState("");
  const [modelByName, setModelByName] = useState<IModel[]>([]);

  const { modelByModelName, showModelByName } = useFilterModelByName();

  const getAllModels = async () => {
    const data = await getModels();
    setModel(data);
    setShouldUpdateModel(false);
  };

  useEffect(() => {
    if (searchModel) {
      showModelByName(searchModel);
    } else {
      setModelGrid(model);
    }
  }, [searchModel, showModelByName, model]);

  useEffect(() => {
    setModelGrid(modelByModelName);
  }, [modelByModelName]);

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
    searchModel,
    setSearchModel,
    modelByName,
    setModelByName,
  };

  return (
    <ModelContext.Provider value={modelContextValue}>
      {children}
    </ModelContext.Provider>
  );
}
