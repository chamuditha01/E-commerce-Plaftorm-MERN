import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Swal from 'sweetalert2';

const ProductCard = ({ minPrice, maxPrice }) => {
    const [products, setProducts] = useState([]);
    

    const [filteredProducts, setFilteredProducts] = useState([]);

    const detailspopup=(details) =>{
        Swal.fire({
            title: details,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }

    useEffect(() => {
        fetchProducts();
        // Filter products based on the provided price range
        const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        setFilteredProducts(filtered);
    }, [products, minPrice, maxPrice]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5002/getProducts", {
                params: {
                    minPrice: minPrice,
                    maxPrice: maxPrice
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    {/*useEffect(() => {
        fetchProductsByPriceRange(minPrice, maxPrice);
    }, [minPrice, maxPrice]); // Fetch products whenever minPrice or maxPrice changes
*/}
    return (<div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredProducts.map(product => (
                <Col key={product.id}>
                    <Card className="h-100" style={{ borderRadius: '0px' }}>
                        <Card.Header>
                            <img
                                src={`data:image/jpeg;base64,${product.image}`}
                                alt={product.name}
                                style={{ width: "100px", height: "100px" }}
                                onClick={() => detailspopup(product.details)}
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{product.name}</Card.Text>
                            <Card.Text>{product.details}</Card.Text>
                            <Card.Text>Price: Rs.{product.price}</Card.Text>
                            <Card.Text>Stock: {product.stock}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);
}

export default ProductCard;
