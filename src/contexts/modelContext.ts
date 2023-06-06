import { createContext } from "react";
import { IModelContext } from "@/common/interfaces/IModel";

const ModelContext = createContext<IModelContext>({
  model: [
    {
      _id: "",
      model_brand: "",
      model_name: "",
      model_oid_snmp_printed: "",
      model_oid_snmp_copied: "",
      model_oid_snmp_toner_level: "",
    },
  ],
  setModel: () => {
    return;
  },
  modelGrid: [],
  setModelGrid: (modelGrid) => {
    return modelGrid;
  },
  shouldUpdateModel: false,
  setShouldUpdateModel: (shouldUpdateModel) => {
    return shouldUpdateModel;
  },
  searchModel: "",
  setSearchModel: (searchModel) => {
    return searchModel;
  },
  modelByName: [],
  setModelByName: (modelByName) => {
    return modelByName;
  },
});

export default ModelContext;
