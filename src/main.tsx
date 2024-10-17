import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { tasksApi } from "./api/tasksApi.ts";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ApiProvider api={tasksApi}>
      <App />
    </ApiProvider>
  </Provider>
);
