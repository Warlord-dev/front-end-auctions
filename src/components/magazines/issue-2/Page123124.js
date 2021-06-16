import React from 'react';
import styles from './page123124.module.scss';
import Link from 'next/link';

const Page123124 = () => {
  return (
    <div className={styles.wrapper}>
       <Link href="www.instagram.com/pr.esc/"><a>
       <img src="./magazine/2/images/123_124/image1.png" className={styles.image1} />
       </a>
       </Link>
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/2/images/123_124/video1.mov" type="video/mp4" />
       </video>
       <Link href="https://www.instagram.com/porka_x/"><a>
       <p className={styles.text3}>Nicole Savitskaya</p>
       </a>
       </Link>
       <p className={styles.text1}>F<br/><br/>
I<br/><br/>
R<br/><br/>
E<br/><br/><br/><br/>

S<br/><br/>
U<br/><br/>
I<br/><br/>
T</p>
<p className={styles.text2}>N<br/><br/>
A<br/><br/>
S<br/><br/>
H<br/><br/><br/>
 
R<br/><br/>
U<br/><br/>
C<br/><br/>
K<br/><br/>
M<br/><br/>
A<br/><br/>
N</p>
    </div>
  );
};

export default Page123124;
