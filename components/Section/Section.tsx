import React, { ReactNode } from "react";
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

export interface SectionProps {
  children: ReactNode;
  props?: BoxProps;
}

export const Section = forwardRef<BoxProps, "div">((props, ref) => (
  <Box
    as="section"
    w="100%"
    px="4"
    py="5"
    rounded="sm"
    shadow="lg"
    ref={ref}
    {...props}
  />
));
