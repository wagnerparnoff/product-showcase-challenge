const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Falha ao buscar produtos')
    }

    const data = await response.json()

    return data.map((item) =>({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        category: item.category
    }))
}