import productServices from "../services/product-services";

const useAddProduct = () => {
  const addProduct = async (productData, ownerId) => {
    if (!productData || !ownerId) return;

    // Product images
    const productImages = productData.productImagesFiles
      .filter((file) => file !== null)
      .map((imageFile) => ({
        image: imageFile,
        name: "",
        quantity: null,
      }));

    // Product variant images
    const productImagesFromVariant = productData.productVariantData.map(
      (item) => ({
        image: item.imageFile,
        name: item.name,
        quantity: item.qty,
      }),
    );

    const payloadWithVariants = {
      name: productData.productName,
      category: productData.productCategory,
      condition: productData.productCondition,
      description: productData.productDescription,
      price: productData.productPrice,
      brand: productData.productBrand,
      images: [...productImages, ...productImagesFromVariant],
    };

    const payloadWithoutVariants = {
      name: productData.productName,
      category: productData.productCategory,
      condition: productData.productCondition,
      description: productData.productDescription,
      price: productData.productPrice,
      brand: productData.productBrand,
      images: productImages,
    };

    const payload = productData.productVariantData.length
      ? payloadWithVariants
      : payloadWithoutVariants;

    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("category", payload.category);
    formData.append("condition", payload.condition);
    formData.append("description", payload.description);
    formData.append("price", payload.price);
    formData.append("brand", payload.brand);

    // Add each image object to FormData correctly
    payload.images.forEach((imgObj, index) => {
      formData.append(`images[${index}][image]`, imgObj.image || null);
      formData.append(`images[${index}][name]`, imgObj.name || null);
      formData.append(`images[${index}][quantity]`, imgObj.quantity || 0);
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await productServices.addProduct(formData, ownerId, config);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return { addProduct };
};

export default useAddProduct;
