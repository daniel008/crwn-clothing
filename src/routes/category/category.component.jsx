import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
// import { CategoriesContext } from '../../contexts/categories.context'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector'
import { CategoryContainer, Title } from './category.styles'

const Category = () => {
  const { category } = useParams()
  // const { categoriesMap } = useContext(CategoriesContext)
  // console.log('render/re-rendering category')
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])
  const isLoading = useSelector(selectCategoriesIsLoading)

  useEffect(() => {
    // console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  )
}

export default Category
