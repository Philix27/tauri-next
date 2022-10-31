import React from "react";
import { useRouter } from "next/router";
import { RiHome5Fill } from "react-icons/ri";
import { MdMyLocation, MdAdminPanelSettings } from "react-icons/md";

export default function Sidebar({ activeIndex, setActiveIndex }) {
  const router = useRouter();
  const _path = router.pathname;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_start">
          <ul className="sidebar_start_list">
            <li className="brandName">
              <span>
                <RiHome5Fill />
              </span>
              BRAND
            </li>

            <a className="link" href="#" onClick={() => setActiveIndex(1)}>
              <li
                className={
                  activeIndex == 1 ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <RiHome5Fill />
                </span>
                HOME
              </li>
            </a>
            <a className="link" href="#" onClick={() => setActiveIndex(2)}>
              <li
                className={
                  activeIndex == 2 ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdMyLocation />
                </span>
                POS
              </li>
            </a>

            <a className="link" href="#" onClick={() => setActiveIndex(3)}>
              <li
                className={
                  activeIndex == 3 ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdAdminPanelSettings />
                </span>
                ADMIN
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
