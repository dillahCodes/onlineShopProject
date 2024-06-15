import productServices from "../services/product-services";

const useAddProduct = () => {
  const addProduct = async (productData, ownerId) => {
    if (!productData || !ownerId) return;

    // product images
    const productImages = productData.productImagesPreviewAsUrl
      .filter((file) => file !== null)
      .map((base64Image) => ({
        url: base64Image,
        name: "",
        quantity: null,
      }));

    // product variant
    const productImagesFromVariant = productData.productVariantData.map(
      (item) => ({
        url: item.imagePreview,
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

    try {
      await productServices.addProduct(
        payloadWithVariants ? payloadWithVariants : payloadWithoutVariants,
        ownerId,
      );
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return { addProduct };
};

export default useAddProduct;
