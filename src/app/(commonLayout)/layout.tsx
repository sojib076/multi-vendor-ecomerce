






export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" dark:bg-black dark:text-white">

      {children}
      <footer className="bg-gray-800 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>

    </div>
  );
}