import { Box, Container, VStack, Text, Input, Button, IconButton, useColorMode, useColorModeValue, Flex, Avatar, Divider } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.md" p={0} height="100vh">
      <Flex direction="column" height="100vh">
        <Box bg={useColorModeValue("blue.500", "blue.200")} p={4} color="white">
          <Flex justify="space-between" align="center">
            <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTU5NDMxNXww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text fontSize="2xl">Chat App</Text>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
          </Flex>
        </Box>
        <VStack spacing={4} p={4} flex="1" overflowY="auto" bg={bgColor}>
          <Box w="full" p={4} bg={useColorModeValue("white", "gray.700")} borderRadius="lg">
            <Text color={color}>Hello! How can I help you today?</Text>
          </Box>
          <Box w="full" p={4} bg={useColorModeValue("white", "gray.700")} borderRadius="lg" alignSelf="flex-end">
            <Text color={color}>I need help with my account.</Text>
          </Box>
          {/* More messages */}
        </VStack>
        <Divider />
        <Flex p={4} align="center">
          <Input placeholder="Type a message..." flex="1" />
          <IconButton ml={2} icon={<FaPaperPlane />} isRound="true" colorScheme="blue" aria-label="Send message" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
