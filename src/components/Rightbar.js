"use client";

import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

const Rightbar = () => {
  return (
    <div className="position-sticky" style={{ top: "80px" }}>

      {/* Contacts */}
      <div className="mb-4">
        <h6 className="text-muted">Contacts</h6>

        {[1, 2, 3].map((c) => (
          <Link href="#" key={c} className="text-decoration-none text-dark">
            <div className="d-flex align-items-center gap-2 mb-2 st-hover">
              <Image
                src={`https://i.pravatar.cc/40?img=${c}`}
                className="rounded-circle"
                width="40"
                height="40"
                alt="user"
              />
              <span className="small">User {c}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Group Chats */}
      <div>
        <h6 className="text-muted">Group chats</h6>
        <Link href="#" className="text-decoration-none text-dark " >
          <div className="d-flex align-items-center gap-3 bg-light rounded p-3 st-hover">
            <div
              className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <FaPlus />
            </div>
            <span>Create group chat</span>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Rightbar;