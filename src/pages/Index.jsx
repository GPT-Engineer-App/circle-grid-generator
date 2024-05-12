// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Box, Circle, SimpleGrid } from '@chakra-ui/react';

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid columns={[4, 8]} spacing="20px">
        {Array.from({ length: 64 }).map((_, index) => (
          <Circle size="40px" bg="brand.700" key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
