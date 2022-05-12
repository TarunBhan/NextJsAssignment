import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../Images/flogo.png';
import FooterImage from '../../Images/Footer Graphics.png'
import { Footers, Inner, RarioDesc ,FlexWrap, FlexBox, FooterDesign,Hr, IccLogo} from "./Footer.styles";
const Footer = () => {
    return (
        <>
        <div>
            <Footers>
                <RarioDesc>
                    <Inner size="10px" weight="400"  lineHeight="24px" color="#7B7B7B">
                    © 2021 Rario Inc.
                    </Inner >
                    <Inner size="10px" weight="400" lineHeight="24px" color="#7B7B7B" >
                    © 2021 ICC Properties Inc. All Rights Reserved.
                    </Inner>
                    <Inner size="10px" weight="400" lineHeight="24px" color="#7B7B7B">
                    Officially licensed product of the International Cricket Council Players.
                    </Inner>
                    <Inner size="10px" weight="400" lineHeight="24px" color="#7B7B7B">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </Inner>
                </RarioDesc>
                <FlexBox>
                <FlexWrap  flexWrap="wrap">
                    <Link href="/" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Contact
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://blog.rario.com/" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Blogs
                            </Inner>
                        </a>
                    </Link>
                    <Link href="" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Terms
                            </Inner>
                        </a>
                    </Link>
                    <Link href="" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Privacy
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://rario.freshdesk.com/support/home" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Help
                            </Inner>
                        </a>
                    </Link>
                </FlexWrap>
                <FlexWrap flexWrap="wrap">
                <Link href="https://www.twitter.com/rariohq">
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Twitter
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/rariohq" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Instagram
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://rario.freshdesk.com/support/home" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Help
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCqo65RCtVWBvICDMF6COhLA/feature" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Youtube
                            </Inner>
                        </a>
                    </Link>
                    <Link href="https://rario.freshdesk.com/support/home" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Telegram
                            </Inner>
                        </a></Link>
                        <Link href="https://www.facebook.com/rarioglobal" >
                        <a target="_blank"  rel="noopener noreferrer" >
                            <Inner size="12px" weight="400" color="#969696" lineHeight="" >
                        Facebook
                            </Inner>
                        </a>
                    </Link>
                </FlexWrap>
                </FlexBox>
                <FlexBox>
                    <Image alt="" 
                     width="85px"
                     height="69px"
                    src={Logo}
                    
                    />
                </FlexBox>
                <FlexBox>
                    <Hr></Hr>
                </FlexBox>
                <IccLogo>
                    <Image alt="" src={'/xyz/icclogo.png'} width="40px" height="40px" />
                    <Image alt="" src={'/xyz/ICC.png'}  width="40px" height="40px" />
                </IccLogo>
                <FooterDesign>
                <Image alt="" 
                 
                src={FooterImage}
                className="footer-img" 
                />
                </FooterDesign>

            </Footers>
        </div></>
    )
}
export default Footer;