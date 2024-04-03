import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Swal from 'sweetalert2';
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { ImSad2 } from "react-icons/im";

const ProductCard = ({ minPrice, maxPrice, searchValue }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const detailspopup = (details) => {
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
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, minPrice, maxPrice, searchValue]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5002/getProducts");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filterProducts = () => {
        let filtered = products.filter(product => {
            const matchesPriceRange = product.price >= minPrice && product.price <= maxPrice;
            const matchesSearchValue = product.name.toLowerCase().includes(searchValue.toLowerCase());
            return matchesPriceRange && matchesSearchValue;
        });
        setFilteredProducts(filtered);
    };

    return (
        <div >
            {filteredProducts.length === 0 ? (
                <div>
                <h1>No products available for that criteria</h1><br></br>
                <ImSad2 size={100}  color='red' />
                </div>
            ) : (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {filteredProducts.map(product => (
                    <Col key={product.id}>
                        <Card className="h-100" style={{ borderRadius: '0px' }} id="card1">
                            <Card.Header style={{ padding: 0, height: "180px", overflow: "hidden" }}>
                                <img
                                    src={`data:image/jpeg;base64,${product.image}`}
                                    alt={product.name}
                                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                                    onClick={() => detailspopup(product.details)}
                                />
                            </Card.Header>
                            <Card.Body>
                                <Card.Text style={{ textAlign: 'left' }}>{product.name}</Card.Text>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Card.Text style={{ textAlign: 'left' }}><GiTakeMyMoney size={25} /> Rs.{product.price}</Card.Text>
                                    <FaMoneyBillTransfer style={{ height: '30px', marginLeft: 'auto', borderRadius: '8px' }} color='green' size={25} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Card.Text style={{ textAlign: 'left' }}><FaHouseCircleCheck size={25} /> {product.stock} Available</Card.Text>
                                    <FaCartArrowDown size={25} color='green' style={{ height: '30px', marginLeft: 'auto', borderRadius: '8px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            )}
        </div>
    );
}

export default ProductCard;
