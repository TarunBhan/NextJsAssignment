import React from "react";
import Image from "next/image";
import { Outer, Wrap } from "../../Components/Content/content.styles";
import { SoldBox, SoldTag } from "../../Components/Packs/packs.styles";

interface Type{
path:string;
}
const Test:React.FC<Type> = ({path}) => {
    return (
<Outer>
                <section>
                    <SoldBox>
                        <SoldTag>
                            SOLD OUT
                        </SoldTag>
                    </SoldBox>
                    <Image src={path}  width="275px" height="374px" alt=""/>
                </section>
            </Outer>


    )
}
export default Test;