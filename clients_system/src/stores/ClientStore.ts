import { makeAutoObservable } from "mobx";

class ClientStore {
  clients: Array<{ name: string; nationality: string; occupation: string; email: string }> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchClients() {
    try {
      const response = await fetch("http://localhost:5000/api/clients");
      const data = await response.json();
      this.clients = data;
    } catch (error) {
      console.error("Failed to fetch clients", error);
    }
  }
}

export const clientStore = new ClientStore();