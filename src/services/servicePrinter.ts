import { IPrinter } from "../common/interfaces/IPrinter";

const API_URL = "http://localhost:3000/api/printer";

const createPrinter = async (newPrinter: IPrinter) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrinter),
    });
    const data = await response.json();
    console.log(data.msg);
  } catch (error) {
    console.log(error);
  }
};

const getPrinters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getPrinterBySerial = async (expression: string) => {
  try {
    const response = await fetch(`${API_URL}/?serial=${expression}`);
    const dataPrinterBySerial = await response.json();
    return dataPrinterBySerial;
  } catch (error) {
    console.log(error);
  }
};

const getPrinterById = async (printerId: string) => {
  try {
    const response = await fetch(`${API_URL}/?id=${printerId}`);
    const dataPrinterById = await response.json();
    return dataPrinterById;
  } catch (error) {
    console.log(error);
  }
};

const updatePrinter = async (id: string, printerUpdated: IPrinter) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(printerUpdated),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error updating printer. Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deletePrinter = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Impressora excluída com sucesso");
    } else {
      throw new Error(`Erro ao excluir a impressora ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  createPrinter,
  getPrinters,
  getPrinterBySerial,
  getPrinterById,
  updatePrinter,
  deletePrinter,
};
