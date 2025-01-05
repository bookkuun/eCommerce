import { Button } from "@mui/material";
import { useEffect } from "react";
import productApi from "@/apis/productApi";

function ProductList() {
  const fetchProducts = async () => {
    const res = await productApi.getAll();
    console.log("check", res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Button variant="contained">My Button</Button>
    </div>
  );
}

export default ProductList;
