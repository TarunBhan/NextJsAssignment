import styled from "@emotion/styled";
type TextProps={
    weight:string
    size:string
}
type Margin={
    mb:string
    mt:string
}
export const Text= styled.div<TextProps>`
color:${props=>props.color};
font-family: 'Montserrat', sans-serif;
font-weight: ${props=>props.weight};
font-size:${props=>props.size};
padding-top:12px;
line-height: 73px;
letter-spacing: 0em;
display:flex;
margin-top:88px;
flex-wrap:wrap;
position:relative;
@media (max-width:700px){
    margin-top:200px;
}
`
export const Sub=styled.div`
    display:flex;
    flex-wrap:wrap;
    
`
export const Para=styled.p`
    color:${props=>props.color};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;

    font-weight: 500;
    margin: 0;
    line-height: 24px;
    white-space: normal;
    position: relative;
`
export const Wrap= styled.div<Margin>`
margin-top:${props=>props.mt};

margin-bottom:${props=>props.mb};
`
export const    SubText= styled.h2<TextProps>`
color: #FFFFFF;
font-family: 'Montserrat', sans-serif;
font-size: ${props=>props.size};
font-weight:${props=>props.weight};
line-height: 37px;
letter-spacing: 0em;
text-align: left;
`
export const Desc = styled.p`
position: relative;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
opacity: 0.6;
`
export const Outer=styled.div`
display:flex;
flex-direction: row;
justify-self: space-between;
flex-wrap: wrap;
gap:7rem;
`