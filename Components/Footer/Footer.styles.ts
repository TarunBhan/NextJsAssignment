import styled from "@emotion/styled";
type TextProps={
   weight:string
    size:string
    lineHeight:string

}
type Flexs={
    flexWrap:string
}
export const Footers=styled.div`
display:flex;
align-items: center;
position: relative;
justify-content:center;
height: 166px;
flex-wrap: wrap;
gap: 3rem;
background-color: rgb(255, 255, 255);
justify-self: center;
@media screen and (max-width: 1308px)
{
    display: flex;
    position: relative;
    height: auto;
}
@media screen and (min-width: 992px)
 {
    height: 165px;
}
`
export const RarioDesc= styled.div`
display: flex;
flex-direction: column;
transform: none;
flex-wrap: wrap;
margin:-10px;
`
export const Inner =styled.span<TextProps>`
font-size: ${props=>props.size};
font-weight:${props=>props.weight};
font-family: 'Montserrat',sans-serif;
color:${props=>props.color};
margin: 5px;
line-height:${props=>props.lineHeight};

`
export const FlexWrap= styled.div<Flexs>`
    display: flex;
    flex-wrap:${props=>props.flexWrap};
    flex-direction: row;
    padding: 0;
    margin-top: 24px;
    gap: 1rem;
    cursor:inherit;
`
export const FlexBox=styled.div`
display:flex;
flex-direction:column;
`
export const FooterDesign=styled.div`
position: absolute;
right: 0;
bottom: 0px;
@media screen and (max-width: 1103px){
    min-height: 200px;
    bottom: 102px;
    float: right;
}
`
export const Hr=styled.div`
border-left: 1px solid rgba(0, 0, 0, 0.281);
height: 38px;`
export const IccLogo=styled.div`
display: flex;
    white-space: nowrap;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
`