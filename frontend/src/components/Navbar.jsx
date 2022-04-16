import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartSharp } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  color: darkblue;
  border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 25px;
  border: solid darkblue 0.5px;
`;
const SearchInput = styled.input`
  border: none;
  padding: 5px;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;

  margin-left: 20px;
`;
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput placeholder="Search..." />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Deepak Enterprise</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartSharp />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
