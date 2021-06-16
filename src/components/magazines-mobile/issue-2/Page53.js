import Link from 'next/link';
import React from 'react';
import styles from './page53.module.scss';

const Page53 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/57_58_mobile.jpg" className={styles.back} />
      <div className={styles.text1}>XENOTECH</div>
      <img src="./magazine/2/images/57_58_mobile_image1.png" className={styles.image1} />
      <div className={styles.text2}>
        In 2020 XENOTECH transitioned from working on a physical clothing brand to 3D, having always
        felt frustrated by the constraints faced when trying to work with fabrics such as Vinyl—a
        nightmare to sew with and ultimately very uncomfortable to wear. With digital fashion these
        constraints disappear and there are unlimited possibilities. Video Clothing and the use of
        physically-impossible fabrics and textures are some examples.
      </div>
      <div className={styles.text3}>
        XENOTECH explores themes of futurism and the convergence of exponential technological
        trends. Along with the garments, creating Digital Fashion experiences within virtual worlds
        will be a primary focus for XENOTECH.
      </div>
      <img src="./magazine/2/images/57_58_mobile_image2.png" className={styles.image2} />
      <Link href="">
        <a className={styles.link1}>
          <div className={styles.text4}>
            Discover the XENOTECH Sphere.
          </div>
        </a>
      </Link>
      <video autoPlay loop muted className={styles.video1}>
        <source src="./magazine/2/images/57_58_video4.mp4" type="video/mp4" />
      </video>
      <div className={styles.text5}>
        The biggest inspiration behind my creative work has been my upbringing and travels. My father’s job as a journalist resulted in our family moving from country to country frequently. From birth to highschool I moved between Tokyo (birthplace), New York, Rome, and Abu Dhabi. I was fortunate to have exposure to many different cultures and international experiences growing up, which has informed much of the work I do today. Much of this upbringing forced me to quickly adapt to change and learn to embrace it, and for this reason change is something I cherish.
      </div>
      <img src="./magazine/2/images/57_58_image6.png" className={styles.image3} />
      <img src="./magazine/2/images/57_58_mobile_image3.png" className={styles.image4} />
      <div className={styles.text6}>
        DECO
        ONLY FANS
      </div>
      <div className={styles.text7}>
        DECO
        ONLY FANS
      </div>
    </div>
  );
};

export default Page53;
