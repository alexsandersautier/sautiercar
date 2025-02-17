import "./globals.css";

export const metadata = {
  title: "SautierCar",
  description: "Compra e venda de veículos em Chapecó",
  icons: {
    icon: "icons/carro.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
