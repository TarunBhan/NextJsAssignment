import React from "react";
import Image from "next/image";
import { Tag, TagTitle } from "./LankaLeauge/Packs/packs.styles";
interface Props{
    paths:string;
    tag:string
    background:string
    color:string
}
const Img:React.FC<Props>=({paths,tag,background,color}):any=>{

    return<>
        <Tag>
        <Image src={paths} width="275px" height="375px"  alt=""/>
        <TagTitle background={background} color={color}>
        {tag}
        </TagTitle>
        </Tag>
    </>
}
export default Img;