import "./globals.css";

export const metadata = {
  title: "rendering in app router",
  description: "render in app router",
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
