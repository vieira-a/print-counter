import { IModel } from "@/common/interfaces/IModel";

const API_URL = "http://localhost:3000/api/model";

const createModel = async (newModel: IModel) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newModel),
    });
    const data = await response.json();
    return data.msg;
  } catch (error) {
    console.log(error);
  }
};

const getModels = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const updateModel = async (id: string, modelUpdated: IModel) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelUpdated),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Erro ao atualizar modelo. Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteModel = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Modelo excluído do sucesso");
    }
  } catch (error) {
    console.log(`Erro ao excluir o modelo ${error}`);
  }
};

const getModelById = async (modelId: string) => {
  try {
    const response = await fetch(`${API_URL}/?id=${modelId}`);
    const dataModelById = await response.json();
    return dataModelById;
  } catch (error) {
    console.log(`Erro ao buscar modelo: ${error}`);
  }
};

const getModelByName = async (expression: string) => {
  try {
    const response = await fetch(`${API_URL}?model_name=${expression}`);
    const dataModelByName = response.json();
    return dataModelByName;
  } catch (error) {
    console.log(error);
  }
};

//http://localhost:3000/api/model?model_name=W

export {
  createModel,
  getModels,
  updateModel,
  deleteModel,
  getModelById,
  getModelByName,
};
