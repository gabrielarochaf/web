import { BrowserRouter } from "react-router-dom";

// import { AuthRoutes } from "./Auth-routes";
//import { EmployeeRoutes } from "./Employee-rouths";
import { ManagerRoutes } from "./Manager-routes";
export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
