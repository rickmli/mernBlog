import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashChart from "../components/DashChart";

function Dashboard() {
  const [tab, setTab] = useState("");
  const { readParam } = useSearch();

  useEffect(
    function () {
      const tabFromUrl = readParam("tab");
      if (tabFromUrl) setTab(tabFromUrl);
    },
    [readParam],
  );

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Dashboard */}
      {tab === "dash" && <DashChart />}
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {/* Posts */}
      {tab === "posts" && <DashPosts />}
      {/* Users */}
      {tab === "users" && <DashUsers />}
      {/* Comments */}
      {tab === "comments" && <DashComments />}
    </div>
  );
}

export default Dashboard;
