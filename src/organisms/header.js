import React from "react"
import cc from "classcat"
import { Link } from "gatsby"

const itemList = [
  {
    label: "About me",
    link: "#about-me"
  },
  {
    label: "Experience",
    link: "#experience"
  },
  {
    label: "Playground",
    link: "#playground"
  },
  {
    label: "Contact",
    link: "#contact"
  },
]

const Header = () => {
  return (
    <header>
      <nav className="p-8">
        <div className="logo">

        </div>
        <ul className="flex justify-end">
          {
            itemList.map((item, index, array) => (
              <li key={item.label}>
                <Link
                  className="
                    rounded
                    duration-100
                    p-3
                    text-gray-600
                    transition
                    hover:text-white
                  "
                  to={item.link}
                >
                  { item.label }
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
