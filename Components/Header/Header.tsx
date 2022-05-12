import React from "react";
import Image from "next/image";
import help from '../../Images/Logo.png'
import coming from '../../Images/comin_soon.svg'
import searchbar from '../../Images/Vector.png';
import userInfo from  '../../Images/Vector1.png';
import notification from  '../../Images/notification.png';
import { Nav,SearchBar,StyledInput,Options,Notification,Li} from "./Header.styles";
import { css } from "@emotion/react";
const res=()=>{

   return <>
    <Nav>
    <Li><Image src={help} alt=""/></Li>
    <Li> <a href="#">Packs</a></Li>
    <Li> <a href="#">MarketPlace</a></Li>
    <Li> <a href="#">Vault</a></Li>
    <Li> <a href="#">Club</a>
    <Image src={coming} alt="" />
    </Li>
    <SearchBar>
    <Image src={searchbar} alt=""/>
    <StyledInput placeholder="Search" />
    </SearchBar>
    <Options>
        <Image src={userInfo} alt=""/>
    </Options>
    <Options>
    <Notification />
    <Image src={notification} alt=""/>
    </Options>

    </Nav>

    </>
}
export default res;