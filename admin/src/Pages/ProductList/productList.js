import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar/sidebar'
import "../../App.css";
import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/apiCalls";
import { selectProduct } from '../../Redux/productRedux';
import { Box } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/navbar';
import ProductHome from './productHome';
import ProductLists from './productLists';
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  useEffect(() => {
    console.log(products)
  }, [products])
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      {/* <Topbar />
      <div className='container'>
        <Sidebar />
        <div className="productList">
          {products?.products?<DataGrid
            rows={products.products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            checkboxSelection
          />:null}
        </div>
      </div> */}
      <Box alignItems="stretch" display="flex" w="100%">
        <Sidebar />
        <Box bgColor="#f5f7fb" overflow={"hidden"} display="flex" flexDirection={"column"} minH="100vh" minW="0" width={"100%"}>
          <Navbar />
          <ProductHome products={products?.products}/>
          <ProductLists products={products?.products}/>
        </Box>
      </Box>
    </>
  )
}

export default ProductList