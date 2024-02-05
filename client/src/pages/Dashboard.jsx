import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";

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
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <DashUsers />}
    </div>
  );
}

export default Dashboard;
