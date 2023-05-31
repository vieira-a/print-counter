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

export { createModel, getModels };
