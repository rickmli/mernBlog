import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function DashSidebar() {
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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
