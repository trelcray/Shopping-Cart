import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { store } from "@/redux/store";
import { GlobalStyle } from "@/styles/styled";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}
