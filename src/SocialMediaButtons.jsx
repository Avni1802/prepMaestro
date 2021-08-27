import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

// import { FACEBOOK_BLUE, TWITTER_BLUE } from "./constants/colors";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

// const {  EmailShareButton } =
//   ShareButtons;

const WrapShareButtons = styled.div`
  & > .SocialMediaShareButton {
    display: inline-block;
    margin: 10px 0;
    margin-right: 10px;
  }

  & > .SocialMediaShareButton > .btn {
    width: 64px;
    height: 32px;
    padding: 0;
    border-radius: 0;
    border: 0;
  }

  & > .SocialMediaShareButton--facebook > .btn,
  & > .SocialMediaShareButton--facebook > .btn:hover,
  & > .SocialMediaShareButton--facebook > .btn:active,
  & > .SocialMediaShareButton--facebook > .btn:focus {
  }

  & > .SocialMediaShareButton--twitter > .btn,
  & > .SocialMediaShareButton--twitter > .btn:hover,
  & > .SocialMediaShareButton--twitter > .btn:active,
  & > .SocialMediaShareButton--twitter > .btn:focus {
  }

  & > .SocialMediaShareButton--email > .btn {
    background: white;
    border: #00ade8 1px solid;
  }
  & > .SocialMediaShareButton--email > .btn > .glyphicon {
    font-size: 18px;
    line-height: 25px;
    color: #00ade8;
  }
  & > .SocialMediaShareButton > .btn > img {
    height: 32px;
  }
`;

const SocialMediaButtons = (props) => (
  <WrapShareButtons>
    <FacebookShareButton url={props.url} quote={props.text}>
      <Button>
        {/* <img src="/static/facebook-icon.png" /> */}
        facebook
      </Button>
    </FacebookShareButton>
    <WhatsappShareButton url={props.url} quote={props.text}>
      <Button>
        {/* <img src="/static/facebook-icon.png" /> */}
        Whatsapp
      </Button>
    </WhatsappShareButton>
    <EmailShareButton url={props.url} quote={props.text}>
      <Button>
        {/* <img src="/static/facebook-icon.png" /> */}
        Mail
      </Button>
    </EmailShareButton>

    <TwitterShareButton url={props.url} title={props.text}>
      <Button>
        {/* <img src="/static/twitter-icon.png" /> */}
        Twitter
      </Button>
    </TwitterShareButton>
  </WrapShareButtons>
);

export default SocialMediaButtons;
