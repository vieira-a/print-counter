import { ICounter } from "@/common/interfaces/ICounter";
const API_URL = "http://172.16.0.28:3000/api/counter";

const createCounter = async (newCounter: ICounter) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCounter),
    });
    const data = await response.json();
    console.log(data.msg);
  } catch (error) {
    console.log(error);
  }
};

const getCounters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { createCounter, getCounters };