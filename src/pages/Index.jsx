// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import './Index.css';
import { css } from '@emotion/react';
import { Box, Circle, SimpleGrid } from '@chakra-ui/react';

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center" bgColor="black">
      <SimpleGrid columns={[4, 8]} spacing="40px">
        {Array.from({ length: 64 }).map((_, index) => (
          <Circle
            size="80px"
            css={css`
              animation-delay: ${index * 0.1}s;
            `}
            className="animated-circle"
            key={index}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
