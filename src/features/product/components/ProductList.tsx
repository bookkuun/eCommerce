import { Button } from "@mui/material";
import { useEffect } from "react";
import productApi from "@/apis/productApi";
import { useAppSelector } from "@/redux/hook";

function ProductList() {
  const { user } = useAppSelector((state) => state.user);

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
      <span>
        Hello {user.firstName} + {user.lastName}
      </span>
    </div>
  );
}

export default ProductList;
