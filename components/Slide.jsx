import styles from "../styles/Slide.module.css";
import Image from "next/image";
import img1 from "../public/assets/img/rahul-upadhyay-yDKHJxfiWDk-unsplash.jpg";
import img2 from "../public/assets/img/likemeat-CbNAuxSZTFo-unsplash.jpg";
import img3 from "../public/assets/img/saahil-khatkhate-kfDsMDyX1K0-unsplash.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slide = () => {
  const images = [img3, img2, img1];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <AiOutlineArrowLeft size={50} />
          {images.map((img, index) => (
            <>
              <Image
                src={img}
                alt=""
                key={index}
                layout="fill"
                objectFit="cover"
                className={styles.imgSlid}

              />
              <div className={styles.imgInfo}>
                <div>
                  <h1> Hot and Spacy</h1>
                  <p>Pizza</p>
                  <p>50% off</p>
                </div>
                <div className={styles.orderButton}>Order Now</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <AiOutlineArrowRight size={50} />
    </div>
  );
};

export default Slide;
