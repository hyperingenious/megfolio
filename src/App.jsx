import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import TheShell from "./components/Shell";

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <TheShell />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
