import React from 'react';
import {Product} from '../models/products';
import {Filters} from '../models/filters';
import {findAllByDisplayValue} from '@testing-library/react';

const Products = (props: {
  products: Product[],
  filters: Filters,
  setFilters: (filters: Filters) => void,
  lastPage: number,
}) => {

  const search = (s: string) => {
    props.setFilters({
      ...props.filters,
      page: 1,
      s
    })
  }

  const sort = (sort: string) => {
    props.setFilters({
      ...props.filters,
      page: 1,
      sort,
    })
  }

  const load = () => {
    props.setFilters({
      ...props.filters,
      page: props.filters.page +1
    })
  }

  let button;
  if (props.filters.page != props.lastPage) {
    button = (
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary" onClick={load}>Load More</button>
      </div>
    )
  }

  return (
    <>
      <div className="col-md-12 mb-4 input-group">
        <input type="text" className="form-control" placeholder="Search"
          onChange={e => search(e.target.value)}
        />
        <div className="input-group-append">
          <select className="form-select" onChange={e => sort(e.target.value)}>
            <option>Select</option>
            <option value="asc">Price Ascending</option>
            <option value="desc">Price Descending</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.products.map(product => {
          return (
            <div className="col">
              <div className="card shadow-sm">
                <img src={product.image} height={200} />

                <div className="card-body">
                  <p className="card-text">{product.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">${product.price}</small>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
      {button}
    </>

  );
};

export default Products;
