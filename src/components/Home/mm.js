import React, { useState } from "react";
import styled from "styled-components";
import DisplayCard from "./DisplayCard";

const BuildSide = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image src="/images/2.jpg" />
          <Hold>
            <RealName>name</RealName>
            <Profile>profile</Profile>
          </Hold>
        </Holder>

        <Text>
          <Suggest>Suggestions For You</Suggest>
          <Action>See All</Action>
        </Text>

        <Text>
          <Holder>
            <Image1 src="/images/2.jpg" />
            <Hold>
              <Name
                onMouseEnter={() => {
                  setDisplay(true);
                }}
                onMouseLeave={() => {
                  setDisplay(false);
                }}
              >
                preshylala
              </Name>
              <Profile>follows you and 2 others</Profile>
              {display ? (
                <Div>
                  <DisplayCard />
                </Div>
              ) : null}
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>

        <Text>
          <Holder>
            <Image1 src="/images/2.jpg" />
            <Hold>
              <Name>codelabbyskillhub</Name>
              <Profile>followed by microsoft</Profile>
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>

        <Text>
          <Holder>
            <Image1 src="/images/2.jpg" />
            <Hold>
              <Name>davidson</Name>
              <Profile>new to instagram</Profile>
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>

        <Text>
          <Holder>
            <Image1 src="/images/2.jpg" />
            <Hold>
              <Name>evolving women network</Name>
              <Profile>Followed by speakwithblessing + 1 more</Profile>
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>

        <Last>
          <h3>About.Help.Press.API.Jobs.Privacy.Terms.Locations</h3>
          <h2>© 2022 SOCIAL BUILD FROM CODELAB</h2>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default BuildSide;

const Div = styled.img`
  position: absolute;
  bottom: -10px;
`;

const Image1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Last = styled.div`
  h3 {
    color: lightgray;
    font-size: 15px;
  }
  h2 {
    color: lightgray;
    font-size: 13px;
  }
`;

const Content = styled.div`
  cursor: pointer;
  color: #69bff8;
`;

const Action = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
`;

const Suggest = styled.div`
  font-weight: 700;
  font-size: 19px;
  color: gray;
  cursor: pointer;
`;
const Text = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  font-size: 13px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 15px;

  position: relative;

  ::after {
    content: "";
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    transition: all 350ms;
  }

  :hover {
    cursor: pointer;
  }
`;

const RealName = styled.div`
  font-weight: 600;
  font-size: 15px;
`;
const Hold = styled.div``;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Wrapper = styled.div`
  margin-left: 50px;
  width: 400px;
`;
const Container = styled.div`
  width: 100%;
  position: fixed;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
