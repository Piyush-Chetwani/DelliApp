import styles from '../styles/productlist.module.css'
import Image from 'next/image'
import ProductCard from './ProductCard'

const ProductList =({productList}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}> THE BEST FOOD IN CITY </h1>
    <p className={styles.desc}>
    lorem ipsum ditsu lorem ipsum ditsu lorem ipsum ditsu v v lorem ipsum ditsu lorem ipsum ditsu lorem ipsum ditsu </p>
    <div className={styles.wrapper}>
    {productList.map(product => (
      <ProductCard key={product._id} product={product}/>
    ))}
    </div>
    </div>
  )
}

export default ProductList
