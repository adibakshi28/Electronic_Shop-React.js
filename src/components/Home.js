import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        document.title = `ElectronicShop`;

        const unsubscribe = db.collection("products").onSnapshot((snapshot) => {
            const productsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data(),
            }));
            setProducts(productsData);
        });

        return () => unsubscribe();
    }, []);

    // Function to chunk the product array
    const chunkArray = (myArray, chunkSize) => {
        let results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunkSize));
        }
        return results;
    };

    // Create chunks of products, with 3 products per chunk (row)
    const productChunks = chunkArray([...products], 3);

    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MDUxZTAzODMt/MDUxZTAzODMt-MTlkMjQ1MmEt-w1500._CB418674021_.jpg" alt="" />
                {/* Mapping over chunks to create rows */}
                {productChunks.map((productChunk, rowIndex) => (
                    <div key={rowIndex} className="homeRow">
                        {productChunk.map((product) => (
                            <Product 
                                key={product.id} 
                                id={product.id} 
                                title={product.product.title} 
                                price={product.product.price} 
                                rating={product.product.rating} 
                                image={product.product.image} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
