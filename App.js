import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldloaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoloaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldloaded || !latoloaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
