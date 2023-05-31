import { ReactNode } from "react";

export interface IModel {
  _id?: string;
  model_brand: string;
  model_name: string;
  model_oid_snmp_printed: string;
  model_oid_snmp_copied: string;
  model_oid_snmp_toner_level: string;
}

export interface IModelContext {
  model: IModel[];
  setModel: React.Dispatch<React.SetStateAction<IModel[]>>;
  modelGrid: IModel[];
  setModelGrid: React.Dispatch<React.SetStateAction<IModel[]>>;
}

export interface IModelProvider {
  children: ReactNode;
}
