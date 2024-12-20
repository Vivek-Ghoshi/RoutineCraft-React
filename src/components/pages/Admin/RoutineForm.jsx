import React, { useState } from 'react';

const RoutineForm = () => {
  const [isOpen, setIsOpen] = useState({
    milestones: true,
    benefits: true,
    products: true
  });

  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    milestones: [{ week: '', description: '' }],
    benefits: [''],
    products: []
  });

  const availableProducts = [
    { id: 1, name: "Yoga Mat", category: "Equipment" },
    { id: 2, name: "Meditation Cushion", category: "Accessories" },
    { id: 3, name: "Essential Oils", category: "Wellness" },
    { id: 4, name: "Resistance Bands", category: "Equipment" }
  ];

  const toggleSection = (section) => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleProductToggle = (productId) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter(id => id !== productId)
        : [...prev.products, productId]
    }));
  };

  return (
    <div className="py-8 mx-auto p-4  bg-[#F9FAFB] dark:bg-[#1F2937]">
      {/* Form Header */}
      <h2 className="text-3xl font-bold text-[#111827] mb-6 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent">Create New Routine</h2>
      
      <form className="space-y-6">
        {/* Basic Info Section */}
        <div className="space-y-4">
          <div className="group">
            <input
              type="text"
              placeholder="Routine Name"
              className="w-48 px-4 py-2 rounded-lg border-2 border-[#FACC15] 
                focus:border-[#6366F1] focus:ring-2 focus:ring-[#FACC15]/20 
                bg-white transition-all duration-300 text-[#111827]"
            />
          </div>
          
          <div className="group">
            <select
              className="w-72 px-4 py-2 rounded-lg border-2 border-[#FACC15] 
                focus:border-[#6366F1] focus:ring-2 focus:ring-[#FACC15]/20 
                bg-white transition-all duration-300 text-[#111827]"
            >
              <option value="">Select Duration</option>
              <option value="4">4 Weeks</option>
              <option value="8">8 Weeks</option>
              <option value="12">12 Weeks</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <button
            type="button"
            onClick={() => toggleSection('products')}
            className="w-full px-6 py-4 flex justify-between items-center text-white
              bg-gradient-to-r from-[#6366F1] to-[#14B8A6] hover:bg-[#14B8A6] transition-colors duration-200 rounded-lg"
          >
            <span className="font-medium">Linked Products</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 
                ${isOpen.products ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen.products && (
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableProducts.map((product) => (
                  <label
                    key={product.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer
                      transition-all duration-200 hover:shadow-sm
                      ${formData.products.includes(product.id)
                        ? 'border-[#14B8A6] bg-[#F472B6]/10'
                        : 'border-[#FACC15]/20 hover:border-[#FACC15]'
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product.id)}
                      onChange={() => handleProductToggle(product.id)}
                      className="w-5 h-5 rounded border-[#86a789] text-[#2c4a34]
                        focus:ring-[#86a789] focus:ring-offset-0"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-[#2c4a34]">{product.name}</p>
                      <p className="text-sm text-[#4a6741]">{product.category}</p>
                    </div>
                  </label>
                ))}
              </div>
              
              {formData.products.length > 0 && (
                <div className="pt-4 border-t border-[#86a789]/20">
                  <div className="flex items-center justify-between text-[#4a6741]">
                    <span>Selected Products:</span>
                    <span className="font-medium text-[#FACC15]">{formData.products.length}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <button
            type="button"
            onClick={() => toggleSection('milestones')}
            className="w-full px-6 py-4 flex justify-between items-center text-[#2c4a34]
              hover:bg-[#f5f2e9] transition-colors duration-200 rounded-lg"
          >
            <span className="font-medium">Milestones</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 
                ${isOpen.milestones ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen.milestones && (
            <div className="p-6 space-y-4 transition-all duration-300">
              {formData.milestones.map((_, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Week"
                    className="w-24 px-4 py-2 rounded-lg border-2 border-[#86a789] 
                      focus:border-[#2c4a34] focus:ring-2 focus:ring-[#86a789]/20"
                  />
                  <input
                    type="text"
                    placeholder="Milestone Description"
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-[#86a789] 
                      focus:border-[#2c4a34] focus:ring-2 focus:ring-[#86a789]/20"
                  />
                </div>
              ))}
              <button
                type="button"
                className="text-[#111827] hover:text-[#FACC15] transition-colors duration-200"
              >
                + Add Milestone
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-white rounded-lg
            hover:bg-[#14B8A6] transition-colors duration-300 shadow-sm"
        >
          Create Routine
        </button>
      </form>
    </div>
  );
};

export default RoutineForm;