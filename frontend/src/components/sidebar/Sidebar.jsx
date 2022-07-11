import "./sidebar.css";
// import {
//   RssFeed,
//   Chat,
//   PlayCircleFilledOutlined,
//   Group,
//   Bookmark,
//   HelpOutline,
//   WorkOutline,
//   Event,
//   School,
// } from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <RssFeed className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <Chat className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <PlayCircleFilledOutlined className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <Group className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <Bookmark className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <HelpOutline className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <WorkOutline className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>

            {/* <Event className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarIcon" ></div>
            {/* <School className="sidebarIcon" /> */}
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <div key={u.id} user={u} ></div>
            // <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
