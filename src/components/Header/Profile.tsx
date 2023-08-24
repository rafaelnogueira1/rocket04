import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Landuci</Text>
          <Text color="gray.300" fontSize="small">
            matheuslanduci@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Landuci"
        src="https://github.com/matheuslanduci.png"
      />
    </Flex>
  );
}
