import "./globals.css";

export const metadata = {
  title: "William De Azevedo",
  description: "Développeur Front-end Javascript React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
