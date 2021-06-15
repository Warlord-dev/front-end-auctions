import React from 'react';
import styles from './page129.module.scss';
import Link from 'next/link';

const Page129 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/139_140_mobile.jpg" className={styles.back} />
      <div className={styles.text1}>Ride the Black Swan: Towards an Antifragile Metaverse</div>
      <div className={styles.text2}>
        The notion of precarity — or the state of being in a precarious, uncertain situation — has
        become the norm rather than the exception for the great majority of the 6 billion souls that
        inhabit this material plane.
        <br />
        <br />
        Human life is precarious by nature and design. It bears reminding that, beyond all the
        myopic, self-absorbed claptrap we've been accustomed to hearing about how we are the center
        of the world, a "black swan" — first coined by author and former options trader Nassim
        Nicholas Taleb in 2007 to describe an event that is unpredictable, massively impactful, and
        can be retrospectively explainable as though they can be predicted — is all it needs to put
        us in our cosmic place.
        <br />
        <br />
        History is chock full of examples of black swan events. 9/11. The Iraq War. The rise of
        Bitcoin. COVID-19. Elon Musk. The list goes on and on. These examples were unpredictable,
        but the outcomes were perhaps obvious and inevitable when we play armchair quarterbacks days
        or weeks after the fact. Hence, the need to build antifragile structures.
        <br />
        <br />
        "Out of life's school of war—what doesn't kill me, makes me stronger."
        <br />- Friedrich Nietzsche, Aus der Kriegsschule des Lebens (1888)
        <br />
        <br />
        Taleb, in 2012's Antifragile, postulates the categorization of things that benefit from
        Nietzsche's "school of war" — or the chaos of existence — as antifragile things. This lies
        in contrast to fragile things, or things damaged by said existential chaos, and robust
        things, or things that are largely resilient to it. Black swans are a manifestation of the
        universe's unpredictability, fraught with volatility, chaos, and randomness at every turn —
        and, therefore, the precarious and fragile nature of our existence on this mortal coil.
        <br />
        <br />
        Fragile structures, such as the top-down structures we see in politics, society, business,
        and technology, are characterized by Taleb in the form of Damocles' sword, dangling
        precariously by a single thread above the poor courier's head as he "enjoys" a festive
        banquet prepared on his behalf.
        <br />
        <br />
        Robust structures are characterized as the phoenix, which is cyclically reborn from the
        ashes that it came from, in the same form as it once took, largely unchanged from its
        inception.
        <br />
        <br />
        Taleb uses the nine-headed Hydra as a prime exponent of antifragility: for every head you
        cut, two grow. Antifragile systems thrive on turning chaos into cosmos — Mother Nature, for
        instance, binges and purges at her whims, destroying what was meant to be destroyed, to
        strengthen those that withstand her in the form of evolutionary adaptations.
      </div>
    </div>
  );
};

export default Page129;
