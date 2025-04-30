import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <section className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/landscape.jpg"
              width={240}
              height={140}
              className={styles.image}
              alt="item image"
            />
          </div>
          <div className={styles.itemInfoContainer}>
            <div className={styles.itemInfo}>
              <Image height={16} width={16} src="/globe.svg" alt="globe" />
              <p>ფიზიკური პირი</p>
            </div>
            <div className={styles.itemInfo}>
              <Image height={16} width={16} src="/window.svg" alt="globe" />
              <p>მიტანით</p>
            </div>
            <h3 className={styles.title}>Lenovo Laptop</h3>
          </div>
        </div>

        <div className={styles.priceWrapper}>
          <div>
            <h5 className={styles.price}>6080ლ</h5>
            <p className={styles.priceInfo}>თვეში 190 ლარიდან</p>
          </div>
          <Image
            className={styles.icon}
            src={
              "https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={38}
            height={38}
            alt="heart-icon"
          />
        </div>
      </section> */}
    </>
  );
}
