import "./global-styles.css";

export const metadata = {
  title: "First Next",
  description: "Built using VS-CODE and NEXT.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
