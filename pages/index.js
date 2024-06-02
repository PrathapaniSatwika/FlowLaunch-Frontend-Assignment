import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
      <SearchBar onSearch={setSearchQuery} />
      <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Home;
