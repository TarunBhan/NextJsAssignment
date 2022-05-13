import styled from '@emotion/styled'
type Props={
background:string;
}
export const Nav =styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start ;
flex-wrap: wrap;
margin-top: 2rem;
padding: 0;
height: 3vh;

gap: 3rem;

@media (max-width:600px)
{
    display:flex;
    flex-wrap:wrap;
    margin-top:10px;
    margin-bottom:20rem;
    padding:10px;
    gap:3rem;
  
}
`
// export const Ul =styled.ul`
//     display:flex;
//     overlflow:hidden;
//     flex-wrap:wrap;
//     align-items:center;
//     margin-top:10px;
//     position:absolute;
//     gap:2rem;
//     list-style-type: none;
//     color:white;
//     font-weight:700;
//     font-family:'Montserrat';
//     font-size:12px;
//     line-height:14.63px;
// `
export const SearchBar= styled.div`
    max-width: 700px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    gap:0.9rem;
    padding:9px;
    height:30px;
   
`
export const StyledInput=styled.input`
background: transparent;
    flex: 1;
    border: 0;
    font-size: 20px;
    outline: none;
    color: #cac7ff;

`
export const Options = styled.div`
    color: white;
    row-gap: 3rem;
    z-index: 4;
    position: relative;
`
export const Notification =styled.div`
background: radial-gradient(79.55% 79.55% at 39.95% 8.68%, #FF996D 0%, #FF0000 100%),linear-gradient(0deg, #EE3233, #EE3233);
position:absolute;
padding:6px;
border-radius:50%;
left:17px;
z-index:1
`
export const Li = styled.div`
    color: white;
    row-gap: 3rem;
    z-index: 4;
    margin-top:10px;
    position: relative;
    text-style:none;
 
`

export const Active=styled.div`
border-bottom: 2px solid red;
    margin-top: 10px;
    width: 45px;
    height: 2px;
    border-radius: 50px;
    background: linear-gradient(180deg, rgba(255, 153, 109, 0) 38.13%, rgb(255 0 0 / 59%) 100%);
    `