import { BrowserRouter } from "react-router-dom";

// import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./employee-rouths";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
