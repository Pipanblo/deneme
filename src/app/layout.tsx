import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="border h-10 w-full bg-blue-400">Navbar</div>
        {children}
        <div className="h-20 w-full bg-gray-400">Footer</div>
      </body>
    </html>
  );
}
