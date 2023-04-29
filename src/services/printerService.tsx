import { IPrinter } from "common/interfaces/IPrinter";

const URL_API = "http://localhost:3000/api/printer";

const printerService = {
  createPrinter: async (newPrinter: IPrinter) => {
    try {
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrinter),
      });
      const data = await response.json();
      console.log(data.msg);
      return data.msg;
    } catch (error) {
      console.log("Erro ao cadastrar impressora:", error);
    }
  },
};
export default printerService;
