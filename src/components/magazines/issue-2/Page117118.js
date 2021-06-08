import React from 'react';
import styles from './page117118.module.scss';
import Link from 'next/link';

const Page117118 = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="www.instagram.com/pr.esc/"><a>
       <img src="./magazine/1/117_118/image1.png" className={styles.image1} />
       </a>
       </Link>
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/1/117_118/video1.mov" type="video/mp4" />
       </video>
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

export default Page117118;
