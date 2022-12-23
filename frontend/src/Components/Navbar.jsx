import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      background="#262c2c"
      color={"#02bdd5"}
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropBlur={"4px"}
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      p={"10px"}
      justify={"center"}
      align={"center"}
      gap={"10px"}
      position={"fixed"}
      top={"0"}
      w={"100%"}
    >
      <Link
        style={{ fontSize: "18px", fontWeight: "bold", padding: "5px" }}
        to={"/"}
      >
        Home
      </Link>
      <Link
        style={{ fontSize: "18px", fontWeight: "bold", padding: "5px" }}
        to={"/dashboard"}
      >
        Dashboard
      </Link>
    </Flex>
  );
};

export default Navbar;
