import React from "react";
import TextInput from "../toolbox/TextInput";

export const ProductDetail = (categories, product, onSave, onChange) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};
