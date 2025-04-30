"use client";
import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "./Navbar.module.css";

const DATA = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "Python" },
  { id: 5, title: "SQL" },
  { id: 5, title: "C++" },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("HTML");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(number + 1);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {DATA.map((item) => (
          <NavBarItem
            key={item.id}
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <h1>{number}</h1>
    </>
  );
};

export default NavBar;
