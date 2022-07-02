import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="md:pd-0 pb-4 md:p-4">
      <div className="navbar bg-base-300 shadow-xl md:rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-300 p-2 shadow-xl"
            >
              <li>
                <Link href="/" passHref={true}>
                  <p className="py-[0.35rem] text-lg font-medium">
                    <a href="">Missions</a>
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/activeflight" passHref={true}>
                  <p className="py-[0.35rem] text-lg font-medium">
                    <a href="">Active Flight</a>
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/pilot" passHref={true}>
                  <p className="py-[0.35rem] text-lg font-medium">
                    <a href="">Pilot</a>
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/shop" passHref={true}>
                  <p className="py-[0.35rem] text-lg font-medium">
                    <a href="">Planes</a>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" passHref={true}>
            <p className="btn btn-ghost py-[0.35rem] text-lg font-medium normal-case">
              <a href="">Flight Sim</a>
            </p>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="pr-4">
              <button className="btn btn-ghost">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  {/* <span className="badge indicator-item badge-xs badge-primary"></span> */}
                </div>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-300 p-2 shadow-xl"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* {search icon} */}
          {/* <label className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge indicator-item badge-xs badge-primary"></span>
          </div>
        </label> */}
        </div>
      </div>
    </div>
  )
}
