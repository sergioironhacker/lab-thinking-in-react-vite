import Data from '../data.json';
import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(Data);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [letsShowInStockOnly, setLetInStockOnly] = useState(false);

  const search = (searchText, showInStock) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (showInStock ? product.inStock : true)
    );
    setFilteredProducts(filtered);
  };

  const toggleInStock = (showInStock) => {
    setLetInStockOnly(showInStock);
    search('', showInStock); // Actualiza la búsqueda cuando cambia el estado del checkbox
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearch={search}
        showInStockOnly={letsShowInStockOnly}
        onToggleInStock={toggleInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;

