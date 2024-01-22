import Footer from "@/components/footer";
import Header from "@/components/header";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    template: 'Guitar LA - %s',
    default: 'Guitar LA', 
  },
  description: "Sitio web oficial de Guitar LA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
