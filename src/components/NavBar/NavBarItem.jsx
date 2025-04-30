"use client";
import styles from "./Navbar.module.css";
const NavBarItem = ({ item, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(item.title);
  };

  return (
    <button
      className={
        activeTab === item.title ? styles.activeTabStyle : styles.navbarItem
      }
      onClick={handleClick}
    >
      <p>{item.title}</p>
    </button>
  );
};

export default NavBarItem;
