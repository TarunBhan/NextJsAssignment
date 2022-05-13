import react from 'react';
import { NextPage } from "next";
import { Desc,
     Sub,
    SubText,
    Text,
    Wrap,
     } from './Content/content.styles';
     interface Props {
        name:string
        desc:string
      }
const League: NextPage<Props> =  ({name,desc}) => {
return (
    <>       
    <Wrap mb="0px" mt="3.2rem">
        <SubText weight="800" size='30px'>
       {name}
        </SubText>
        <Desc>
        {desc}
        </Desc>
        <Desc></Desc>
 
    </Wrap>
    </>
)

}
export default League;

// import { NextPage } from "next";

// // Props interface
// // with username set to string
// interface Props {
//   username: string;
// }

// Defining NextPage as
// type for Name component
// and defining type for props
