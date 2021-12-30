import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Products from './Products';
import axios from 'axios';
import {Product} from '../models/products';
import {Filters} from '../models/filters';

const ProductFrontend = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Filters>({
    s: '',
    sort: '',
    page: 1,
  })

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('products/frontend')

        setAllProducts(data)
        setFilteredProducts(data)
      }
    )()
  }, [])

  useEffect(() => {
    let products = allProducts.filter(p =>
      p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
      p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)

    if (filters.sort === `asc`) {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return 1
        }

        if (a.price < b.price) {
          return -1
        }

        return 0
      })
    } else if (filters.sort === `desc`) {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return -1
        }

        if (a.price < b.price) {
          return 1
        }

        return 0
      })
    }

    setFilteredProducts(products)
  }, [filters])


  return (
    <Layout>
      <Products products={filteredProducts} filters={filters} setFilters={setFilters} />
    </Layout>
  );
};

export default ProductFrontend;
