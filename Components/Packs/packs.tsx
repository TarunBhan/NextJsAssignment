import React from "react";
import { PacksItems, Pack, CardDetails, Main, ButtonWrap, Btn, Space } from "./packs.styles";
import Image from "next/image";
import { Details } from '../Data/Data';
import Img3 from '../../pages/ImageWrap/Img3';
import Img from "../../pages/ImageWrap/Img";
interface Props {
    name: string
}
const Packs: React.FC<Props> = ({ name }): any => {
    if (name == "lanka") {
        return (<Pack>
            {
                Details.map((currElem: any, i: number) => {
                    return (currElem.isSoldout === false && currElem.s === false ?
                        <Main key={currElem.id}>
                            <Image src={currElem.src} height="354px" width="278px" />
                            <PacksItems>
                                <CardDetails size="24px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={1}>
                                    {currElem.title}
                                </CardDetails>
                                <CardDetails size="18px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={0.8}>
                                    <p> {currElem.grade}</p>
                                </CardDetails>
                                <CardDetails size="18px" weight="500" color={currElem.tagcolor} lineHeight="21.94px" opacity={0.8}>
                                    {currElem.date}
                                </CardDetails>
                                <CardDetails size="28px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={1}>
                                    {currElem.price}
                                </CardDetails>
                            </PacksItems>
                        </Main> :
                        null)
                })
            }
        </Pack>
        )
    }
    else if (name === 'sale') {
        return <>
            <Pack>
                {
                    Details.map((currElem: any, i: number) => {
                        return (currElem.isSoldout === true ?
                            <Main key={currElem.id}>
                                <Img paths={currElem.src} tag={currElem.tags} background={currElem.background} color={currElem.color} />
                                <PacksItems>
                                    <CardDetails size="24px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={1}>
                                        {currElem.title}
                                    </CardDetails>
                                    <CardDetails size="18px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={0.8}>
                                        <p> {currElem.grade}</p>
                                    </CardDetails>
                                    <CardDetails size="18px" weight="500" color={currElem.tagcolor} lineHeight="21.94px" opacity={0.8}>
                                        {currElem.date}
                                    </CardDetails>
                                    <CardDetails size="30px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={1}>
                                        {currElem.price}
                                    </CardDetails>
                                    <ButtonWrap >
                                        <Btn>
                                            {currElem.btn}
                                        </Btn>
                                    </ButtonWrap>
                                </PacksItems>
                            </Main>
                            :
                            null
                        )
                    })
                }
            </Pack>
        </>
    }
    else if (name === "soldout")
        return (
            <>
                <Pack>
                    {
                        Details.map((currElem: any, i: number) => {
                            return (currElem.isSoldout === false && currElem.s === true ?
                                <Main key={currElem.id}>
                                    <Img3 path={currElem.src} />
                                    <PacksItems>
                                        <CardDetails size="24px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={1}>
                                            {currElem.title}
                                        </CardDetails>
                                        <CardDetails size="18px" weight="500" color="#ffffff" lineHeight="21.94px" opacity={0.8}>
                                            <p> {currElem.grade}</p>
                                        </CardDetails>
                                        <CardDetails size="14px" weight="500" color={currElem.tagcolor} lineHeight="21.94px" opacity={0.8}>
                                            21 Jan 2021 • 05:30 <br></br>PMSold 35,321
                                        </CardDetails>
                                    </PacksItems>
                                </Main>
                                :
                                null
                            )
                        })
                    }
                </Pack>

            </>
        )
}
export default Packs;
