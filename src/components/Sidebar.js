"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ListGroup, ListGroupItem, Button,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Developers", href: "/developers" },
  { label: "Help", href: "/help" }
];


import {
  FaUserFriends,
  FaClock,
  FaBookmark,
  FaUsers,
  FaVideo,
  FaStore,
  FaNewspaper,
  FaCalendar,
  FaBullhorn,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle
} from "react-icons/fa";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const [open, setOpen] = useState(false);

  const mainMenu = [
    { icon: <FaUserCircle className="" />, label: "John Smith", link: "/" },
    { icon: <FaUserFriends />, label: "Friends", link: "/friends" },
    { icon: <FaClock />, label: "Memories", link: "/memories" },
    { icon: <FaBookmark />, label: "Saved", link: "/saved" },
    { icon: <FaUsers />, label: "Groups", link: "/groups" },
    { icon: <FaVideo />, label: "Reels", link: "/reels" },
    { icon: <FaStore />, label: "Marketplace", link: "/marketplace" },
    { icon: <FaNewspaper />, label: "Feeds", link: "/feeds" }
  ];

  const moreMenu = [
    { icon: <FaCalendar />, label: "Events", link: "/events" },
    { icon: <FaBullhorn />, label: "Ads Manager", link: "/ads" },
    { icon: <FaGamepad />, label: "Play games", link: "/games" }
  ];

  return (
    <div
      className="position-sticky"
      style={{ top: "70px", height: "calc(100vh - 70px)" }}
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>

        <ListGroup flush className="bg-transparent">

          {/* MAIN MENU */}
          {mainMenu.map((item, i) => (
            <ListGroupItem
              key={i}
              className="border-0 bg-transparent px-2 py-2 rounded hover-bg-menu"
            >
              <Link
                href={item.link}
                className="d-flex align-items-center gap-3 text-decoration-none text-dark fw-medium"
              >
                <span className="fs-5 d-flex align-items-center">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </ListGroupItem>
          ))}

          {/* MORE MENU */}
          {showMore &&
            moreMenu.map((item, i) => (
              <ListGroupItem
                key={i}
                className="border-0 bg-transparent px-2 py-2 rounded"
              >
                <Link
                  href={item.link}
                  className="d-flex align-items-center gap-3 text-decoration-none text-dark fw-medium"
                >
                  <span className="fs-5 d-flex align-items-center">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </ListGroupItem>
            ))}

          {/* SEE MORE / LESS */}
          <ListGroupItem
            onClick={() => setShowMore(!showMore)}
            className="border-0 bg-transparent px-2 py-2 rounded cursor-pointer fw-semibold"
          >
            <div className="d-flex align-items-center gap-3">
              <span className="fs-5">
                {showMore ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              <span style={{ cursor: 'pointer' }}>{showMore ? "See less" : "See more"}</span>
            </div>
          </ListGroupItem>

        </ListGroup>

        <div className="small">
          <Link href="#" className="text-small text-dark me-2">
            Privacy
          </Link>
          <Link href="#" className="text-small text-dark me-2">
            Terms
          </Link>
          <Link href="#" className="text-small text-dark me-2">
            Advertising
          </Link>
          <Link href="#" className="text-small text-dark me-2">
            Ad choices
          </Link>
          <Link href="#" className="text-small text-dark me-2">
            Cookies
          </Link>
          <Link href="javascript:void(0);" id="moreMenuBtn" className="text-small text-dark me-1">
            See more ▾
          </Link>
          <UncontrolledPopover
            trigger="legacy"
            placement="bottom-start"
            target="moreMenuBtn"
          >
            <PopoverBody className="p-0">
              <ListGroup flush>
                {menuItems.map((item, index) => (
                  <ListGroupItem key={index} tag="div" className="border-0 bg-transparent px-2 py-2" style={{ fontSize: '12px' }}>
                    <Link href={item.href} className="text-decoration-none d-block text-dark">
                      {item.label}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </PerfectScrollbar>

    </div>
  );
};

export default Sidebar;