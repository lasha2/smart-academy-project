"use client";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
const NavBarItem = ({ item, activeTab, setActiveTab }) => {
  const router = useRouter();

  const handleClick = () => {
    setActiveTab(item.title);
    router.push(`${item.link}`);
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
