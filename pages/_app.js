import Layout from "@/components/templates/Layout";
import "@/styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#006400",
      },
      secondary: {
        main: "#8b0000",
      },
    },
  });

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
