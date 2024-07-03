import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUserMockData = {
    $id: "123",
    email: "el@pacino.com",
    userId: "12345",
    dwollaCustomerUrl: "some url",
    dwollaCustomerId: "some id",
    firstName: "AL",
    lastName: "Pacino",
    address1: "Broadway st",
    city: "LA",
    state: "CA",
    postalCode: "66666",
    dateOfBirth: "12/10/1299",
    ssn: "123-12301",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUserMockData} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedInUserMockData} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
