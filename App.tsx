// App.tsx — clean
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}
