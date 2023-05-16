import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
     const countries = useLoaderData();
     return (
          <div>
               <h2>All Countries: {countries.length}</h2>
               <ul>
                    {
                         countries.map(country => <li>{country.name.common} <Link to={`/${country.cca3}/`}>Details</Link></li>)
                    }
               </ul>
          </div>
     );
};

export default Countries;