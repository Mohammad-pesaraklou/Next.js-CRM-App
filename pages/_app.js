import { createTheme, ThemeProvider } from "@mui/material";
// global style
import "@/styles/globals.scss";
// component
import Layout from "@/components/templates/Layout";

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
