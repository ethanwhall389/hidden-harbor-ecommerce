import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function CategorySelect({ setError, setCategory }) {
  const [categories, setCategories] = useState(null);

  async function getCategories() {
    try {
      const data = await fetch('https://fakestoreapi.com/products/categories', {
        mode: 'cors',
      });
      if (!data.ok) {
        throw new Error(`This is an HTTP error: The status is ${data.status}`);
      }
      const categories = await data.json();
      setCategories(categories);
    } catch (err) {
      setError(err.message);
    }
  }

  function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(event) {
    setCategory(event.target.value);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <select
      className="p-2 rounded-lg"
      name="categories"
      id="categories"
      onChange={handleChange}
    >
      <option value="all">All products</option>
      {categories &&
        categories.map((category, index) => (
          <option value={category} key={index}>
            {capitalizeString(category)}
          </option>
        ))}
    </select>
  );
}

CategorySelect.propTypes = {
  setError: PropTypes.func,
  setCategory: PropTypes.func,
};
