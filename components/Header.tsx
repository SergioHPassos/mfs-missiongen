import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {
  const [isDropped, setIsDropped] = useState<boolean>(false)
  const dropdown = useRef<HTMLDivElement>(null)

  // toggle drop
  const toggleIsDropped = () => {
    if (isDropped) {
      setIsDropped(false)
    } else {
      setIsDropped(true)
    }
  }

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isDropped) return
    const handleClick = (event: any) => {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsDropped(false)
      }
    }
    window.addEventListener('click', handleClick)
    // clean up
    return () => window.removeEventListener('click', handleClick)
  }, [isDropped])

  return (
    // header
    <div
      className={
        isDropped
          ? 'absolute flex h-[15rem] w-full flex-col items-start bg-zinc-800 text-white opacity-90 transition-all'
          : 'absolute flex h-12 w-full flex-col justify-center bg-zinc-800 text-white'
      }
      ref={dropdown}
    >
      {/* header content */}
      <div className="flex w-full items-center justify-between">
        {/* menu icon */}
        <div
          className={isDropped ? 'px-4 pt-[0.6rem]' : 'px-4'}
          onClick={toggleIsDropped}
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: 25 }} />
        </div>

        {/* company name */}
      </div>

      {/* links */}
      <div className={isDropped ? 'p-4' : 'hidden'}>
        <Link href="" passHref={true}>
          <p
            className="py-[0.35rem] text-lg font-medium"
            onClick={toggleIsDropped}
          >
            <a href="">Missions</a>
          </p>
        </Link>

        <Link href="" passHref={true}>
          <p
            className="py-[0.35rem] text-lg font-medium"
            onClick={toggleIsDropped}
          >
            <a href="">Active Flight</a>
          </p>
        </Link>

        <Link href="/pilot" passHref={true}>
          <p
            className="py-[0.35rem] text-lg font-medium"
            onClick={toggleIsDropped}
          >
            <a href="">Pilot</a>
          </p>
        </Link>

        <Link href="" passHref={true}>
          <p
            className="py-[0.35rem] text-lg font-medium"
            onClick={toggleIsDropped}
          >
            <a href="">Shop</a>
          </p>
        </Link>
      </div>
    </div>
  )
}
