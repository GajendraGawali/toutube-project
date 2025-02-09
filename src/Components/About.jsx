import React, { useEffect, useState } from 'react'
import './About.css';

const ProductCard =({image,title})=>
{
    return(
        <div className='product_card'>
            <img src={image} alt={title} className='product_img'/>
            <span>{title}</span>
        </div>
    )
};
const PAGE_SIZE=10;
const About = () => {
    const [products,setProducts]=useState([]);
    const [currentPage,setCurrentPage]=useState(0);
            const fetchData = async()=>
            {
                const data = await fetch(" https://dummyjson.com/products?limit=50");
                const json = await data.json();
                setProducts(json.products);
            };
            useEffect(()=>{
                  fetchData();
            },[]);
            const totalProducts = products.length;
            const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);
            const start = currentPage * PAGE_SIZE;
            const end =   start + PAGE_SIZE;
            const handlePageChange=(n)=>
            {
                   setCurrentPage(n);
            }

  return !products.length ? (<h1>no products found </h1>):(
   
    
    <div className='About'>
        

        <div className='pagination-container'>
            {[...Array(noOfPages).keys()].map((n) =>(
            <span className='page-number' key={n}
            onClick={()=>handlePageChange(n)}
            >
                {n} </span>
            ))}
        </div>
    <div className='product-container'>
    {
        products.slice(start,end ). map((p)=>(<ProductCard key={p.id} image={p.thumbnail} title={p.title}/>))
    }
    </div>
    </div>
  )
}

export default About;