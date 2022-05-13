import React from "react";
import { SubText, Wrap, Para } from "../Content/content.styles";
import { FlexBox, Inner } from "../Footer/Footer.styles";
import { QueryBox, TextQ } from "./Faq.styles";
const Query = () => {
    return (
        <QueryBox>
            <Wrap mb="50px" mt="3.2rem" >
                <SubText weight="800" size="40px">
                    MOST ASKED QUESTIONS ABOUT PACKS
                </SubText>
            </Wrap>
            <Wrap mb="30px" mt="10px">
                <Inner size="30px" weight="800" color="#10FFC6" lineHeight="37px">
                    When To Open Packs?
                </Inner>
            </Wrap>
            <TextQ>
                Everyone considers the best time to open packs is whenever they got their best pulls .But in reality it doesn&apos;t matter.    I&apos;ve<br></br> pulled... Read more
            </TextQ>
            <Wrap mb="30px" mt="40px">
                <Inner size="30px" weight="800" color="#10FFC6" lineHeight="37px">
                    When To Open Packs?
                </Inner>
            </Wrap>
            <TextQ>
                It depends on the pack type, if you open an ultimate pack. The most unique top-rated moments, all in a single pack... <br></br>Read more
            </TextQ>
        </QueryBox>
    )
}
export default Query;

