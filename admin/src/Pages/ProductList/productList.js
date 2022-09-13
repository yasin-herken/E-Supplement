import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar/sidebar'
import Topbar from '../../Components/Topbar/topbar'
import "../../App.css";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/apiCalls";
import { selectProduct } from '../../Redux/productRedux';
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  useEffect(()=>{
    console.log(products)
  },[products])
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
      <Topbar />
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
      </div>
    </>
  )
}

export default ProductList