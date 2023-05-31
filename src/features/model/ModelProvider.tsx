import { useState } from "react";
import { IModel, IModelProvider } from "@/common/interfaces/IModel";
import ModelContext from "@/contexts/modelContext";

export default function ModelProvider({ children }: IModelProvider) {
  const [model, setModel] = useState<IModel>({
    model_brand: "",
    model_name: "",
    model_oid_snmp_printed: "",
    model_oid_snmp_copied: "",
    model_oid_snmp_toner_level: "",
  });

  const modelContextValue = { model, setModel };

  return (
    <ModelContext.Provider value={modelContextValue}>
      {children}
    </ModelContext.Provider>
  );
}
