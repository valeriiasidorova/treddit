import React from "react";
import { Flex } from "@chakra-ui/react";

// type PageLayoutProps = {};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex justify="center" p="16px 0" border="1px solid red">
      {/* content container */}
      <Flex
        width="95%"
        justify="center"
        maxWidth="860px"
        border="1px solid green"
      >
        {/* left side content */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
          border="1px solid blue"
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        {/* right side content */}
        <Flex
          direction="column"
          display={{base: "none", md: "flex"}}
          flexGrow={1}
          border="1px solid orange"
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
//export default PageLayout;