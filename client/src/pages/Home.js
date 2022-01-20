import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME } from '../utils/queries';
import ProductList from '../components/ProductList'
import './style.css'

// import Guitar from '../components/Store'

import Auth from '../utils/auth'

const Home = () => {
    const loggedIn = Auth.loggedIn();
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS)
    const products = data?.products || [];
    //use object destructuring to extract `data` from the useQuery Hook's response and rename it userData to be more descriptive
    const {data: userData} = useQuery(QUERY_ME)
    
    return (
      <main>
        <div>
          {loggedIn && userData? (
            <div className="filter_bar">
              <div>
              <select>
                  <option selected  value="">Brands</option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
               </select>
               <select>
                  <option selected value="grapefruit">Condition</option>
                  <option value="lime">Lime</option>
                  <option  value="coconunt">Coconut</option>
                  <option value="mango">Mango</option>
               </select>
               <select>
                  <option selected value="grapefruit">Prices</option>
                  <option value="lime">Lime</option>
                  <option  value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
               </select>
               </div>
               <div className='cart'> 
                <p>🛒</p>
            
               </div>

               
            </div>
          ): null}
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <ProductList  products={products} title="Available guitars: " />
                {/* <Guitar products={products}/> */}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  };
  
export default Home;
  