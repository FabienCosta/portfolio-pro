import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ma Landing Page",
  description: "Landing page minimaliste avec Next.js et TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
