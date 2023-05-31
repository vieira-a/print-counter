import { createContext } from "react";
import { IModelContext } from "@/common/interfaces/IModel";

const ModelContext = createContext<IModelContext>({
  model: {
    model_brand: "",
    model_name: "",
    model_oid_snmp_printed: "",
    model_oid_snmp_copied: "",
    model_oid_snmp_toner_level: "",
  },
  setModel: () => {
    return;
  },
});

export default ModelContext;
