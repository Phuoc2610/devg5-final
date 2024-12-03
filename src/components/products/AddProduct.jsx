import React, { useState, useEffect } from "react";
import { FiUpload, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { FaX } from "react-icons/fa6";

const AddProduct = ({ onClose }) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    brand: "",
    description: "",
    image: null,
    attributes: [],
    variants: []
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");
  const [attributeInputValues, setAttributeInputValues] = useState([]);

  const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports"];
  const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
      validateField("image", file);
    }
  };

  // addVariant function to add new attribute at the beginning
  const addAttribute = () => {
    setFormData({
      ...formData,
      attributes: [{ name: "", values: [] }, ...formData.attributes]
    });
    setAttributeInputValues(["", ...attributeInputValues]);
  };

  // Clean up variant input value when removing variant
  const removeAttribute = (index) => {
    const newAttributes = formData.attributes.filter((_, i) => i !== index);
    const newAttributeInputValues = attributeInputValues.filter((_, i) => i !== index);
    setFormData({ ...formData, attributes: newAttributes });
    setAttributeInputValues(newAttributeInputValues);
  };

  // Function to remove a specific variant
  const removeVariant = (indexToRemove) => {
    const newVariants = formData.variants.filter((_, index) => index !== indexToRemove);
    setFormData({ ...formData, variants: newVariants });
  };
  // Handle input change for specific variant
  const handleAttributeInputChange = (index, value) => {
    const newAttributeInputValues = [...attributeInputValues];
    newAttributeInputValues[index] = value;
    setAttributeInputValues(newAttributeInputValues);
  };

  // Add value to specific variant
  const addValueToAttribute = (attributeIndex) => {
    if (attributeInputValues[attributeIndex]?.trim()) {
      const newAttributes = [...formData.attributes];
      newAttributes[attributeIndex].values = [
        ...newAttributes[attributeIndex].values,
        attributeInputValues[attributeIndex].trim()
      ];
      setFormData({ ...formData, attributes: newAttributes });

      // Clear only the specific variant's input
      const newAttributeInputValues = [...attributeInputValues];
      newAttributeInputValues[attributeIndex] = "";
      setAttributeInputValues(newAttributeInputValues);
    }
  };

  const removeValueFromAttribute = (attributeIndex, valueIndex) => {
    const newAttributes = [...formData.attributes];
    newAttributes[attributeIndex].values = newAttributes[attributeIndex].values.filter((_, i) => i !== valueIndex);
    setFormData({ ...formData, attributes: newAttributes });
  };

  const generateCombinations = (arrays) => {
    if (arrays.length === 0) return [[]];
    const result = [];
    const restCombinations = generateCombinations(arrays.slice(1));
    for (const item of arrays[0]) {
      for (const combination of restCombinations) {
        result.push([item, ...combination]);
      }
    }
    return result;
  };

  useEffect(() => {
    const validAttributes = formData.attributes.filter(v => v.name && v.values.length > 0);
    if (validAttributes.length > 0) {
      const attributeArrays = validAttributes.map(v => v.values);
      const combinations = generateCombinations(attributeArrays);

      const newVariants = combinations.map(combo => ({
        name: combo.join(" - "),
        price: "",
        quantity: "",
        attributeCombination: combo,
        attributeDetails: validAttributes.map((attribute, index) => ({
          name: attribute.name,
          value: combo[index]
        }))
      }));

      setFormData(prev => ({
        ...prev,
        variants: newVariants
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        variants: []
      }));
    }
  }, [formData.attributes]);



  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "productName":
        if (!value.trim()) {
          newErrors.productName = "Product name is required";
        } else {
          delete newErrors.productName;
        }
        break;
      case "category":
        if (!value) {
          newErrors.category = "Please select a category";
        } else {
          delete newErrors.category;
        }
        break;
      case "brand":
        if (!value) {
          newErrors.brand = "Please select a brand";
        } else {
          delete newErrors.brand;
        }
        break;
      case "description":
        if (!value.trim()) {
          newErrors.description = "Description is required";
        } else {
          delete newErrors.description;
        }
        break;
      case "image":
        if (!value) {
          newErrors.image = "Please upload an image";
        } else {
          delete newErrors.image;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = ["productName", "category", "brand", "description", "image"];
    formFields.forEach((field) => validateField(field, formData[field]));

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="fixed top-0 inset-0 z-20 bg-black bg-opacity-50 py-6 px-4 sm:px-6 lg:px-8 overflow-auto">
      <div className="w-[50%] mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded-lg px-8 pt-4 pb-4">
          <div className="mb-3 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Add New Product</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200"
            >
              <FaX />
            </button>
          </div>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="productName" className="block text-gray-100 text-base font-medium mb-2">
              Product Name *
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Product Name"
            />
            {errors.productName && (
              <p className="text-red-500 text-xs mt-1">{errors.productName}</p>
            )}
          </div>
          {/* Category & Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            <div>
              <label htmlFor="category" className="block text-gray-100 text-base font-medium mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Category"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
              )}
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-100 text-base font-medium mb-2">
                Brand *
              </label>
              <select
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Brand"
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
              {errors.brand && (
                <p className="text-red-500 text-xs mt-1">{errors.brand}</p>
              )}
            </div>
          </div>
          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="block text-gray-100 text-base font-medium mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description....."
              rows="4"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Description"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>
          {/* Image */}
          <div className="mb-3">
            <label className="block text-gray-100 text-base font-medium mb-2">
              Product Image *
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 bg-gray-700 border border-gray-600 rounded-md">
              <div className="space-y-1 text-center">
                {preview ? (
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto h-32 w-32 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview("");
                        setFormData({ ...formData, image: null });
                      }}
                      className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <FiUpload className="mx-auto h-9 w-9 text-gray-200" />
                    <p className="text-gray-300">Upload a file or drag and drop</p>
                  </div>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="sr-only"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Choose file
                </label>
              </div>
            </div>
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image}</p>
            )}
          </div>
          {/* Attribute */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-100">Attribute</h3>
              <button
                type="button"
                onClick={addAttribute}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
              >
                <FiPlus className="mr-2" /> Add Attribute
              </button>
            </div>
            {formData.attributes.map((attribute, attributeIndex) => (
              <div key={attributeIndex} className="mb-2">
                <div className="flex items-center">
                  <span className="text-white px-2">{attributeIndex + 1}</span>
                  <div className="w-full p-4 border border-gray-700 rounded-lg">
                    <div className="flex gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Attribute Name (e.g., Color)"
                        value={attribute.name}
                        disabled={attribute.values.length > 0}
                        onChange={(e) => {
                          const newAttributes = [...formData.attributes];
                          newAttributes[attributeIndex].name = e.target.value;
                          setFormData({ ...formData, attributes: newAttributes });
                        }}
                        className="w-48 md:flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <button
                        type="button"
                        onClick={() => removeAttribute(attributeIndex)}
                        className="p-2 text-red-400 hover:text-red-300"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {attribute.values.map((value, valueIndex) => (
                        <span
                          key={valueIndex}
                          className="inline-flex items-center px-3 py-1 bg-indigo-900 text-indigo-100 rounded-lg text-sm transition-all duration-200 hover:bg-indigo-800"
                        >
                          {value}
                          <button
                            type="button"
                            onClick={() => removeValueFromAttribute(attributeIndex, valueIndex)}
                            className="ml-2 text-indigo-300 hover:text-indigo-200 focus:outline-none"
                          >
                            <FiX size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add new value"
                        value={attributeInputValues[attributeIndex] || ""}
                        onChange={(e) => handleAttributeInputChange(attributeIndex, e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addValueToAttribute(attributeIndex);
                          }
                        }}
                        className="w-44 md:flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100 placeholder-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => addValueToAttribute(attributeIndex)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Variants */}
          {formData.variants.length > 0 && (
            <div className="mb-3">
              <h3 className="text-base font-medium mb-4 text-gray-100">Variants</h3>
              <div className="space-y-4">
                {formData.variants.map((variant, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-white px-2">{index + 1}</span>
                    <div className="w-full p-4 bg-gray-750 border border-gray-700 rounded-lg">
                      <div className="md:flex md:justify-between gap-3">
                        <div className="max-md:mb-4 flex flex-wrap gap-2">
                          {variant.attributeDetails.map((detail, detailIndex) => (
                            <span key={detailIndex} className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-200 rounded-md text-sm">
                              <span className="font-medium text-indigo-400">{detail.name}:</span>
                              <span className="ml-2">{detail.value}</span>
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 items-center">
                          <input
                            type="number"
                            placeholder="Price"
                            value={variant.price}
                            onChange={(e) => {
                              const newVariants = [...formData.variants];
                              newVariants[index].price = e.target.value;
                              setFormData({ ...formData, variants: newVariants });
                            }}
                            className="w-20 px-2 md:w-28 md:px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100 placeholder-gray-400 appearance-none"
                          />
                          <input
                            type="number"
                            placeholder="Quantity"
                            value={variant.quantity}
                            onChange={(e) => {
                              const newVariants = [...formData.variants];
                              newVariants[index].quantity = e.target.value;
                              setFormData({ ...formData, variants: newVariants });
                            }}
                            className="w-20 px-2 md:w-28 md:px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100 placeholder-gray-400"
                          />
                          <button
                            type="button"
                            onClick={() => removeVariant(index)}
                            className="p-2 text-red-400 hover:text-red-300 focus:outline-none ml-auto"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct