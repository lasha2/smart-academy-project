import styles from "./page.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <Image
          src={product.image}
          alt="Theodore Armchair"
          className={styles.image}
          width={600}
          height={600}
        />
      </div>
      <div className={styles.details}>
        <h4 className={styles.collection}>{product.category}</h4>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.delivery}>Delivery from 3 weeks</p>

        <div className={styles.descriptionBox}>
          <h3 className={styles.subheading}>DESCRIPTION</h3>
          <p className={styles.description}>{product.description}</p>
        </div>

        <div className={styles.priceBox}>
          <div className={styles.priceLabel}>Regular price</div>
          <div className={styles.price}>£995</div>
          <div className={styles.priceLabel}>
            Member{" "}
            <span className={styles.savings}>
              (Save £209 for £100 per year)
            </span>
          </div>
          <div className={styles.memberPrice}>£{product.price}</div>
        </div>

        <div className={styles.controls}>
          <button className={styles.qtyButton}>-</button>
          <span className={styles.quantity}>1</span>
          <button className={styles.qtyButton}>+</button>
        </div>

        <div className={styles.buttons}>
          <button className={styles.addToCart}>Add to cart</button>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default page;
