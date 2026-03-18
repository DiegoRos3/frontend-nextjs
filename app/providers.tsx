"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { TooltipProvider } from "@/components/ui/tooltip";

//Esta madre es para envolver el provider de redux, ya que requiere que sea un use client
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </Provider>
  );
}
