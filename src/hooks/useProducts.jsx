import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productsApi.js";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	let isMounted = true;

	async function load() {
	  try {
		setLoading(true);
		setError(null);
		const data = await fetchProducts();

		if (!isMounted) {
		  return;
		}

		setProducts(data);
	  } catch (err) {
		setError("Erro ao carregar produtos");
		console.error(err);
	  } finally {
		if (isMounted) {
		  setLoading(false);
		}
	  }
	}

	load();
  }, []);
	
	return {
		products,
		loading,
		error
	}
}

export default useProducts;