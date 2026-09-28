import React from 'react';
import { useParams } from 'react-router';

function ProductDetailPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Product Detail Page {id}</h1>
        </div>
    )
}

export default ProductDetailPage;