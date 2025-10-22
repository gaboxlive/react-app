import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProviderProps } from "./models/Provider";

const queryClient = new QueryClient();

const Providers: React.FC<ProviderProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
);

export default Providers;