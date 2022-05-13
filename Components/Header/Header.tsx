import React from "react";
import Image from "next/image";
import help from '../../Images/Logo.png'
import coming from '../../Images/comin_soon.svg'
import searchbar from '../../Images/Vector.png';
import userInfo from  '../../Images/Vector1.png';
import notification from  '../../Images/notification.png';
import { Nav,SearchBar,StyledInput,Options,Notification,Li, Active} from "./Header.styles";
import { css } from "@emotion/react";
import Link from "next/link";
const res=()=>{

   return <>
    <Nav>
    <Li><Image src={help} alt=""/></Li>
    <Li className="active"> <Link href="/" className="active">Packs
    </Link>
    <Active ></Active>
    </Li>
    <Li> <Link href="/">MarketPlace </Link></Li>
    <Li> <Link href="/">Vault </Link></Li>
    <Li> <Link href="/">Club </Link>
    <Image src={coming} alt="" />
    </Li>
    <SearchBar>
    <Image src={searchbar} alt="" width="16px" height="16px"/>
    <StyledInput placeholder="Search" />
    </SearchBar>
    <Options>
        <Image src={userInfo} alt=""/>
    </Options>
    <Options>
    <Notification />
    <Image src={notification} alt="" />
    
    </Options>

    </Nav>

    </>
}
export default res;