
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Outfit } from 'next/font/google';
import { Header } from "@/components/Common/Header/Header";
import { Footer } from "@/components/Common/Header/Footer";



const outfit = Outfit( {
  subsets: ['latin'],

  display: 'swap',
  weight: ['400', '500', '600', '700'],

})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{


 

  return (
    <html lang="en">
     <body className={`antialiased ${outfit.className}  bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50`}>
        
         
         
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
          >
            <Header />
             {children}
             <Footer />
          </ThemeProvider>
          
      </body>
    </html>
  );
}