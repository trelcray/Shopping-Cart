import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { GlobalStyle } from "@/styles/styled";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
