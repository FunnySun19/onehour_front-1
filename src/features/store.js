import { configureStore } from "@reduxjs/toolkit";
import spaceSlice from "./backendRoutes/spaceSlice";
import rentSlice from "./backendRoutes/rentSlice";
import clientSlice from "./backendRoutes/clientSlice";
import spaceOwnerSlice from "./backendRoutes/spaceOwnerSlice";
import tenantSlice from "./backendRoutes/tenantSlice";

export const store = configureStore({
  reducer: {
    space: spaceSlice,
    rent: rentSlice,
    client: clientSlice,
    owner: spaceOwnerSlice,
    tenant: tenantSlice,
  },
});
