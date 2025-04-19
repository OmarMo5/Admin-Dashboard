import React from "react";
import TopSection from "./TopSection.jsx"
import MidSection from "./MidSection.jsx"
import BotSection from "./BotSection.jsx"
import Header from "../../Components/Header.jsx";

const Dashboard = () => {
    return (
        <div>
            <Header title={"DashBoard"} subtitle={"Welcome to Your DashBoard"} conBtn={"Download Reports"}/>
            <TopSection />
            <MidSection />
            <BotSection />
        </div>
    )
}

export default Dashboard;