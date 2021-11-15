import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
function Footer() {
  const Footer = styled.div`
    background: #181818;
    height: 90px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;
  const FooterContentsWrap = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    .githubLink {
    }
  `;
  const FooterWord = styled.div`
    text-align: right;
    color: #909090;
    font-size: 6px;
  `;
  const Editor = styled.div`
    color: #909090;
    font-weight: bold;
  `;

  return (
    <Footer>
      <FooterContentsWrap>
        <Editor>JungSeungHyun</Editor>
        <a href="https://github.com/herrakam" className="githubLink">
          <BsGithub size="25" color="#909090"></BsGithub>
        </a>
        <FooterWord>공부 목적으로 만들어진 페이지임</FooterWord>
      </FooterContentsWrap>
    </Footer>
  );
}

export default Footer;
