// import React, { useState } from "react";
// import './Filters.css';
// const Filters = () => {
//   // State for each filter section
//   const [categories, setCategories] = useState({
//     runningShoes: true,
//     category3: false,
//     category4: false,
//   });

//   const [stockStatus, setStockStatus] = useState({
//     inStock: false,
//     outOfStock: false,
//   });

//   const [sizes, setSizes] = useState([]);
//   const [colors, setColors] = useState([]);

//   // Handlers for updating the state
//   const handleCategoryChange = (event) => {
//     setCategories({
//       ...categories,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleStockChange = (event) => {
//     setStockStatus({
//       ...stockStatus,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleSizeChange = (event) => {
//     const value = event.target.value;
//     setSizes(
//       sizes.includes(value)
//         ? sizes.filter((size) => size !== value)
//         : [...sizes, value]
//     );
//   };

//   const handleColorChange = (event) => {
//     const value = event.target.value;
//     setColors(
//       colors.includes(value)
//         ? colors.filter((color) => color !== value)
//         : [...colors, value]
//     );
//   };

//   return (
//     <div className="filters">
//       <h3>Filters</h3>
//       <div className="category-filter">
//         <h4>Category</h4>
//         <label>
//           <input
//             type="checkbox"
//             name="runningShoes"
//             checked={categories.runningShoes}
//             onChange={handleCategoryChange}
//           />
//           Running Shoes
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="category3"
//             checked={categories.category3}
//             onChange={handleCategoryChange}
//           />
//           Category 3
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="category4"
//             checked={categories.category4}
//             onChange={handleCategoryChange}
//           />
//           Category 4
//         </label>
//       </div>
//       <div className="stock-status-filter">
//         <h4>Stock Status</h4>
//         <label>
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={stockStatus.inStock}
//             onChange={handleStockChange}
//           />
//           In Stock
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="outOfStock"
//             checked={stockStatus.outOfStock}
//             onChange={handleStockChange}
//           />
//           Out of Stock
//         </label>
//       </div>
//       <div className="size-filter">
//         <h4>Size</h4>
//         <label>
//           <input
//             type="checkbox"
//             value="small"
//             checked={sizes.includes("small")}
//             onChange={handleSizeChange}
//           />
//           Small
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="medium"
//             checked={sizes.includes("medium")}
//             onChange={handleSizeChange}
//           />
//           Medium
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="large"
//             checked={sizes.includes("large")}
//             onChange={handleSizeChange}
//           />
//           Large
//         </label>
//       </div>
     
//     </div>
//   );
// };

// export default Filters;





// import React, { useState } from "react";
// import './Filters.css';
// import { TfiAlignJustify } from "react-icons/tfi";

// const Filters = () => {

//   const [categories, setCategories] = useState({
//     runningShoes: true,
//     category3: false,
//     category4: false,
//   });

//   const [stockStatus, setStockStatus] = useState({
//     inStock: false,
//     outOfStock: false,
//   });

//   const [sizes, setSizes] = useState([]);
//   const [colors, setColors] = useState([]);

//   const [isOpen, setIsOpen] = useState(false);

 
//   const handleCategoryChange = (event) => {
//     setCategories({
//       ...categories,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleStockChange = (event) => {
//     setStockStatus({
//       ...stockStatus,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleSizeChange = (event) => {
//     const value = event.target.value;
//     setSizes(
//       sizes.includes(value)
//         ? sizes.filter((size) => size !== value)
//         : [...sizes, value]
//     );
//   };

//   const handleColorChange = (event) => {
//     const value = event.target.value;
//     setColors(
//       colors.includes(value)
//         ? colors.filter((color) => color !== value)
//         : [...colors, value]
//     );
//   };

//   const toggleFilters = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
// <div className={ ` BBB ${isOpen ? 'open' : ''} ` } >
//   <div className="menu">
//   <button className="toggle-button" onClick={toggleFilters}>
//     {isOpen ? "☰" : "☰"}
//   </button>
//   </div>
//   </div>
//       <div className={`filters ${isOpen ? "open" : ""}`}>
//         <h3>Filters</h3>
//         <div className="category-filter">
//           <h4>Category</h4>
//           <label>
//             <input
//               type="checkbox"
//               name="runningShoes"
//               checked={categories.runningShoes}
//               onChange={handleCategoryChange}
//             />
//             Running Shoes
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="category3"
//               checked={categories.category3}
//               onChange={handleCategoryChange}
//             />
//             Category 3
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="category4"
//               checked={categories.category4}
//               onChange={handleCategoryChange}
//             />
//             Category 4
//           </label>
//         </div>
//         <div className="stock-status-filter">
//           <h4>Stock Status</h4>
//           <label>
//             <input
//               type="checkbox"
//               name="inStock"
//               checked={stockStatus.inStock}
//               onChange={handleStockChange}
//             />
//             In Stock
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="outOfStock"
//               checked={stockStatus.outOfStock}
//               onChange={handleStockChange}
//             />
//             Out of Stock
//           </label>
//         </div>
//         <div className="size-filter">
//           <h4>Size</h4>
//           <label>
//             <input
//               type="checkbox"
//               value="small"
//               checked={sizes.includes("small")}
//               onChange={handleSizeChange}
//             />
//             Small
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="medium"
//               checked={sizes.includes("medium")}
//               onChange={handleSizeChange}
//             />
//             Medium
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="large"
//               checked={sizes.includes("large")}
//               onChange={handleSizeChange}
//             />
//             Large
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;





import React, { useState } from "react";
import './Filters.css';
import { TfiAlignJustify } from "react-icons/tfi";

const Filters = () => {
  const [categories, setCategories] = useState({
    runningShoes: true,
    category3: false,
    category4: false
  });

  const [stockStatus, setStockStatus] = useState({
    inStock: false,
    outOfStock: false,
  });

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (event) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked,
    });
  };

  const handleStockChange = (event) => {
    setStockStatus({
      ...stockStatus,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSizes(
      sizes.includes(value)
        ? sizes.filter((size) => size !== value)
        : [...sizes, value]
    );
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColors(
      colors.includes(value)
        ? colors.filter((color) => color !== value)
        : [...colors, value]
    );
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`BBB ${isOpen ? 'open' : ''}`}>
        <div className="menu">
          <button className="toggle-button" onClick={toggleFilters}>
            {isOpen ? "☰" : "☰"}
          </button>
        </div>
      </div>
      <div className={`filters ${isOpen ? "open" : ""}`}>
        <h3>Filters</h3>
        <div className="category-filter">
          <h4>Category</h4>
          <label>
            <input
              type="checkbox"
              name="runningShoes"
              checked={categories.runningShoes}
              onChange={handleCategoryChange}
            />
            Running Shoes
          </label>
          <label>
            <input
              type="checkbox"
              name="category3"
              checked={categories.category3}
              onChange={handleCategoryChange}
            />
            Category 3
          </label>
          <label>
            <input
              type="checkbox"
              name="category4"
              checked={categories.category4}
              onChange={handleCategoryChange}
            />
            Category 4
          </label>
        </div>
        <div className="stock-status-filter">
          <h4>Stock Status</h4>
          <label>
            <input
              type="checkbox"
              name="inStock"
              checked={stockStatus.inStock}
              onChange={handleStockChange}
            />
            In Stock
          </label>
          <label>
            <input
              type="checkbox"
              name="outOfStock"
              checked={stockStatus.outOfStock}
              onChange={handleStockChange}
            />
            Out of Stock
          </label>
        </div>
        <div className="size-filter">
          <h4>Size</h4>
          <label>
            <input
              type="checkbox"
              value="small"
              checked={sizes.includes("small")}
              onChange={handleSizeChange}
            />
            Small
          </label>
          <label>
            <input
              type="checkbox"
              value="medium"
              checked={sizes.includes("medium")}
              onChange={handleSizeChange}
            />
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              value="large"
              checked={sizes.includes("large")}
              onChange={handleSizeChange}
            />
            Large
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
