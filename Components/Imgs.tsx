import React from "react";
import Image from "next/image";
import { SoldBox, SoldTag } from "../LankaLeauge/Packs/packs.styles";
import pic from '../public/Sp1.png';
 const Imgs=()=>{
    return <>
    
     <SoldBox>
        <SoldTag>
            SOLDOUT
        </SoldTag>
    </SoldBox>
     <Image src={pic}  layout="fixed" alt=""/>
    </>
}
export default Imgs;