import React from "react";
import { Flex, Progress } from "@chakra-ui/core";
import UserContext from "../UserContext";

const Footer = () => {
  const { logged } = React.useContext(UserContext);
  return (
    <React.Fragment>
      {logged && (
        <Flex bg="primary" padding="0.6rem">
          <Progress value={100} flexGrow={1} />
          <Progress value={80} color="pink" flexGrow={1} />
        </Flex>
      )}
    </React.Fragment>
  );
};

export default Footer;
