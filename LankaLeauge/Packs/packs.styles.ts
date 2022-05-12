import styled from "@emotion/styled";
type Cards={
    size:string;
    weight:string;
    lineHeight:string;
    opacity:number
}

type Tags={
    background:string;
}

export const PacksItems=styled.div`
padding:12px;
display:flex;
flex-direction:column;
gap:0.5rem;
transform:none;
`

export const Pack=styled.div`
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: flex-start;
/* margin-left: 200px; */
flex-flow: wrap;
gap: 20px;
font-family: sans-serif;
`

export const CardDetails=styled.span<Cards>`
font-size:${props=>props.size};
font-weight:${props=>props.weight};
color:${props=>props.color};
line-height:${props=>props.lineHeight};
font-family: 'Montserrat', sans-serif;
opacity:${props=>props.opacity};
`


export const Main=styled.div`
margin:0;
display:flex;
flex-direction:column;
flex-wrap:no-wrap;

`
export const Tag=styled.div`
position:relative;
margin:0;
z-index:0;
`
export const TagTitle=styled.span<Tags>`
color: ${props=>props.color};
    background: ${props=>props.background};
    width: fit-content;
    height: 28px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    text-align: center;
    font-size: 20px;
    margin: 0;
    line-height: 24px;
    padding: 4px;
    position: absolute;
    top: 10px;
    z-index: 2;
    left: 148px;
`
export const ButtonWrap= styled.div`
margin-top: 30px;
`
export const Btn= styled.button`
color: #ffffff;
    width: 161px;
    height: 43px;
    cursor: pointer;
    border-radius: 500px;
    background-color: rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border: 2px solid #ffffff;
    letter-spacing: 2px;
`
export const SoldBox=styled.div`
    background-color: black;
    color: red;
    border: 4px solid red;
    width: 256px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top:33%;
    z-index: 40;
`
export const SoldTag=styled.div`
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 25.7745px;
    width: 185px;
    margin-left: 10%;
    position: absolute;
    text-align: center;
    z-index: 0;
`
export const Space=styled.div`

margin:0;`