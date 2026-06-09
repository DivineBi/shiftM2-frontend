const API_URL = 'https://localhost:8080';  // connect au backend

export async function createProduct(product) {
    const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error('Failed to create product');
    }

    return await res.json();
}

export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);    

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return await res.json();
}

export async function deleteProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error('Failed to delete product');
    }
}