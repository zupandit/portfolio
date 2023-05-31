import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <TypeAnimation
              cursor={false}
              sequence={[
                'Hi, I\'m Pedro.',
                () => setShowSubtitle(true)
              ]}
              speed={{type: "keyStrokeDelayInMs", value: 150}}
              wrapper="h1"
              repeat={0}
            />
            {showSubtitle &&
              <TypeAnimation
                cursor={true}
                sequence={[
                  500,
                  'A Full-Stack Developer.',
                  1000,
                  'A BCIT graduate.',
                  // 'I design and code beautifully simple things, and I love what I do.',
                  1000,
                  'A problem solver.',
                  1000,
                  'An innovative thinker.',
                  1000,
                  'A....',
                  1000,
                  'A.... cool guy?',
                  1000,
                  "Ok...",
                  1000,
                  "Ok...  I'm running out of ideas...",
                  1000,
                  "Uhh...",
                  1000,
                  "Uhh... you can scroll down to see my projects now...",
                  1000,
                  "Seriously, my projects are really cool, go check them out!",
                  1000,
                  "You're uh...",
                  1000,
                  "You're uh... still here?",
                  1000,
                  "Ok, this has been fun, but I'm gonna restart the loop now...",
                  1000,
                  "Or...",
                  1000,
                  "Or... I could scroll you by force! Muahaha!",
                  1000,
                  "See ya! :)",
                  1000,
                ]}
                deletionSpeed={65}
                wrapper="h5"
                repeat={Infinity}
              />
            }
            {/* <h1>Hi, I'm Pedro</h1>
            <h5>Frontend Developer</h5> */}

          </HeroLeft>
          <HeroRight>
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
