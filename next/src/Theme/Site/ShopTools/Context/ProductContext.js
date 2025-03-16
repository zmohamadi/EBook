"use client"

import { createContext,useReducer } from 'react';
import { initialState,reducer } from '@/Theme/Site/ShopTools/Reducer/ProductReducer';

function getQueryParams(params) {
  const queryObject = {};
  for (const [key, value] of params.entries()) {
      queryObject[key] = value;
  }
  return queryObject;
}

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, baseDispatch] = useReducer(reducer, initialState);

  const dispatch = (type, data = null) => {
    if(data == null) 
      baseDispatch({ type: type });
    else
      baseDispatch({ type: type, ...data });
  }

  const filterDispatch = (type, urlParams="") => {
    urlParams = new URLSearchParams(window.location.search);
    baseDispatch({ type: type, data: getQueryParams(urlParams) });
  }

    return (
      <ProductContext.Provider value={{ state, dispatch, filterDispatch }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  export { ProductContext, ProductProvider };