import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes'
import '@/styles/globals.css'
import { Footer, NavBar } from '@/components'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Justice Chimobi",
  description: `Justice is a multi-disciplinary Software Engineer based in Lagos, 
  Nigeria, is passionate about creating web and mobile applications. By day, he 
  delves into various technical challenges, while at night, he transforms into a 
  technical writer.
  Justice is deeply involved in the tech community and loves open-source projects. 
  His expertise lies in building interactive and responsive apps, creating optimized 
  RESTFUL API's and prioritizing accessibility for both web and mobile platforms.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
