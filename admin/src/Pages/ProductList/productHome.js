import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, List, ListItem, Select, Input, Divider } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import Card from "../../Components/CardContainer/card.js";
import "./productList.css";
const itemsPerPage = 10;
function ProductHome({ products }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % products.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Box flex="1" maxW="100vw" justifyContent={"space-around"}>
        <Grid templateColumns='repeat(12, 1fr)' templateRows={"repeat(12, 1fr)"} >
          <GridItem w='100%' h='100px' colSpan={12} rowSpan={1} >
            <Box ml="20px" mt="30px" >
              <Heading>Products grid</Heading>
            </Box>
          </GridItem>
          <GridItem h='600px' colSpan={12} rowSpan={5} m="0px 30px">
            <Flex
              width="100%"
              height="65px"
              flexDir="row"
              as="nav"
              justify="space-between"
              border="1px solid #ffffff"
              alignItems={"center"}
              p="5"
            >
              <List m="0" overflow="hidden" w="100%" alignItems={"center"}  >
                <ListItem float="left">
                  <Input></Input>
                </ListItem>
                <ListItem float="right">
                  <Select w="100%">
                  </Select>
                </ListItem>
                <ListItem float="right">
                  <Select></Select>
                </ListItem>
              </List>
            </Flex>
            <Divider />
            <GridItem colSpan={12} rowSpan={6}>
              <Box>
                <Flex
                  flexDir={"row"}
                  flexWrap={"wrap"}
                  ml="4px"
                >
                  {currentItems?.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Card item={item} />
                      </Box>
                    )
                  })}
                </Flex>
                <Flex
                  flexDir="row"
                  alignItems={"center"}
                  justifyContent="center"
                  mt="8px"
                >
                  <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />
                </Flex>
              </Box>
            </GridItem>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default ProductHome