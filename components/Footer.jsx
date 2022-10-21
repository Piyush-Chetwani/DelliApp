import styles from '../styles/footer.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/bg.png" alt="" layout='fill' objectFit="cover"/>
       </div>
      <div className={styles.item}>
      <div className={styles.card}>
      <h2 className={styles.motto}>
      Oh, Yes we did. The Lama Pizza, well baked and well sliced
      </h2>  </div>
      <div className={styles.card}>
      <h1 className={styles.title}> Find our Restaurnt </h1>
      <p className={styles.text}>
      1654 R. Dom Road.
      <br/> Rajsthan, India.
      <br/> 1234-564-895.
      </p>
      <p className={styles.text}>
      1654 R. Dom Road.
      <br/> Madhya Pradhes, India.
      <br/> 1234-564-895.
      </p>
      <p className={styles.text}>
      1654 R. Dom Road.
      <br/> Mumbai, India.
      <br/> 1234-564-895.
      </p>
      <p className={styles.text}>
      1654 R. Dom Road.
      <br/> Delhi, India.
      <br/> 1234-564-895.
      </p>
      </div>
      <div className={styles.card}>
      <h1 className={styles.title}> WORKING HOURS </h1>
      <p className={styles.text}>
      MONDAY - FRIDAY
      <br/> 09:00 - 22:00
      </p>
      <p className={styles.text}>
      SATURDAY AND SUNDAY
      <br/> 10:00 - 23:00
      </p>
      </div>
      </div>
    </div>
  )
}

export default Footer
