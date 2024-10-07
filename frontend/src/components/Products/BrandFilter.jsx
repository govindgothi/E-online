import React, { useState } from 'react';
import styles from './BrandFilter.module.css'; // Import the external CSS file

const brands = [
  'Apple',
  'Samsung',
  'Sony',
  'LG',
  'Dell',
  'HP',
  'Lenovo',
  'Asus',
];

const BrandFilter = ({ onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = (brand) => {
    let updatedBrands = [];
    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter((item) => item !== brand);
    } else {
      updatedBrands = [...selectedBrands, brand];
    }
    setSelectedBrands(updatedBrands);
    onFilterChange(updatedBrands);
  };

  return (
    <div className={styles.brand_filter}>
      <h3 className={styles.brand_filter_title}>Filter by Brand</h3>
      <ul className={styles.brand_filter_list}>
        {brands.map((brand, index) => (
          <li key={index} className={styles.brand_filter_item}>
            <input
              type="checkbox"
              id={`brand-${brand}`}
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
              className={styles.brand_checkbox}/>
            <label htmlFor={`brand-${brand}`} className={styles.brand_label}>
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

//export default BrandFilter;

export { BrandFilter}
