import Image from "next/image";
import React from "react";
import pic from "../../Images/Packs.png";
import { Text,Sub,Para, Wrap,SubText, Desc} from "./content.styles";
const Content=()=>{
    return(
    <>
    <Text color="white" weight="800" size="60px">
    BUY PACKS, OWN CRICKET
    </Text>
    <Sub>
     <Para color="grey">
        Reserve a pack that youree eligible for get in line.
        Buy the pack whenit drops. Open the pack to get cricketing moments<br></br>  from the history.
     </Para>
    </Sub>
    <hr></hr>
    <Wrap mb="0px" mt="3.2rem">
        <SubText weight="800" size='30px'>
        Pack Drop Ending Soon
        </SubText>
        <Desc>
        Get Your Pack Now
        </Desc>
        <Image src={pic} alt="" height="256px" width="919px"  />
    </Wrap>
    <hr></hr>
    </>
    )
}
export default Content;