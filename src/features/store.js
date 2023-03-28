import { configureStore } from "@reduxjs/toolkit";
import spaceSlice from "./backendRoutes/spaceSlice";
import bookingSlice from "./backendRoutes/bookingSlice";
import clientSlice from "./backendRoutes/clientSlice";
import spaceOwnerSlice from "./backendRoutes/spaceOwnerSlice";
import tenantSlice from "./backendRoutes/tenantSlice";

export const store = configureStore({
  reducer: {
    space: spaceSlice,
    booking: bookingSlice,
    client: clientSlice,
    owner: spaceOwnerSlice,
    tenant: tenantSlice,
  },
});
