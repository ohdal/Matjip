import { useState } from "react";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const navigation = [
  {
    id: 1,
    text: "맛집 목록",
    url: "/stores",
  },
  {
    id: 2,
    text: "맛집 등록",
    url: "/stores/new",
  },
  {
    id: 3,
    text: "찜한 가게",
    url: "/users/likes",
  },
  {
    id: 4,
    text: "로그인",
    url: "/users/login",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link className="navbar__logo" href="/">
          🗺️ JMaT Jip
        </Link>
        <div className="navbar__list">
          {navigation.map((v) => (
            <Link className="navbar__list--item" key={v.id} href={v.url}>
              {v.text}
            </Link>
          ))}
        </div>
        {/* mobile button */}
        <div className="navbar__button" role="presentation" onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      <div>
        <div className={`navbar--mobile ${isOpen && "is-open"}`}>
          <div className="navbar__list--mobile">
            {navigation.map((v) => (
              <Link className="navbar__list--item--mobile" key={v.id} href={v.url} onClick={() => setIsOpen(false)}>
                {v.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
