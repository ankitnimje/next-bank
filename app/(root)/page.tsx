import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
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
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUserMockData?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedInUserMockData} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
