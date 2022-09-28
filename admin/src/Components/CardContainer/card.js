import { Badge, Box, Flex, Image, Text, useStyleConfig } from '@chakra-ui/react';
import { MdStar } from "react-icons/md";
function Card(props) {
  const { variant, ...rest } = props
  console.log(props)
  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest} >
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src={props.item.img} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {props.item.title}
        </Text>
        <Text mt={2}>{props.item.price}</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> ({props.item.reviews})
          </Text>
        </Flex>
      </Box>
    </Box>
  )

}

export default Card;