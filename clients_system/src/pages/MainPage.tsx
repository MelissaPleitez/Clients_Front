import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { clientStore } from "../stores/ClientStore";

const MainPage: React.FC = observer(() => {
  useEffect(() => {
    clientStore.fetchClients();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clients</h1>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientStore.clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.nationality}</td>
              <td>{client.occupation}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default MainPage;