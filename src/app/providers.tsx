"use client";

import * as React from "react";
// import { NextUIProvider } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function AppProviders({
   children,
   themeProps
}: ProvidersProps) {
   return (
      <NextUIProvider>
         <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
   );
}
