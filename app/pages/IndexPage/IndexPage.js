// @flow
import React, { type Node } from 'react';

import Image from '@app/components/Image';
import {
  Paragraph as P,
  Headline as H
} from '@app/components/Text';
import FlexContainer from '@app/components/FlexContainer';
import FlexItem from '@app/components/FlexItem';

import style from './style';

export default function IndexPage(): Node {
  return (
    <div className={style}>
      <FlexContainer
        align-items="center"
        justify-content="space-around">
        <FlexItem>
          <Image
            src="http://res.cloudinary.com/dpctxqsij/image/upload/c_scale,w_400/v1524952131/ben_hike.jpg"
            circle={true}
          />
        </FlexItem>
      </FlexContainer>
      <FlexContainer
        align-items="flex-start"
        flex-direction="column"
      >
        <H className="intro" center full>Hey, I&apos;m Ben</H>
        <P center full>Full stack web engineer</P>
      </FlexContainer>
      <FlexContainer>
        <P className="pad" full>
          Hey, I&apos;m Ben Junya - I&apos;m a(n) (award losing) full stack web developer. I work React, CSS, and Javascript to create web applications that scale big, fast, and wide :D
        </P>
      </FlexContainer>
        <H className="work" center full>My Work</H>
      <FlexContainer
        align-item="center"
        justify-content="space-around"
      >
        <FlexItem
          align-self="center"
        >
          <a href="https://www.lexus.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="http://res.cloudinary.com/dpctxqsij/image/upload/v1524947514/lexus-logo.jpg"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.zeconomy.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="http://res.cloudinary.com/dpctxqsij/image/upload/v1524947778/zeconomy-site.png"
            />
          </a>
        </FlexItem>
      </FlexContainer>
      <P className="work-blurb" center>
        Much of my work contains time-sensitve material and is not my own intellectual property. If you would like to view these work samples, please reach out to me at <a href="mailto:ben@mrbenj.io">ben@mrbenj.io</a>
      </P>
      <H center full>Technologies</H>
      <FlexContainer
        align-items="center"
        justify-content="space-around">
        <FlexItem>
          <P center full>React</P>
        </FlexItem>
        <FlexItem>
          <P center full>Redux</P>
        </FlexItem>
        <FlexItem>
          <P center full>Node</P>
        </FlexItem>
        <FlexItem>
          <P center full>Express</P>
        </FlexItem>
        <FlexItem>
          <P center full>Sass</P>
        </FlexItem>
        <FlexItem>
          <P center full>Emotion</P>
        </FlexItem>
        <FlexItem>
          <P center full>Python</P>
        </FlexItem>
        <FlexItem>
          <P center full>Flask</P>
        </FlexItem>
        <FlexItem>
          <P center full>PostgreSQL</P>
        </FlexItem>
        <FlexItem>
          <P center full>Redis</P>
        </FlexItem>
        <FlexItem>
          <P center full>GraphQL</P>
        </FlexItem>
        <FlexItem>
          <P center full>Relay Modern</P>
        </FlexItem>
        <FlexItem>
          <P center full>Apollo</P>
        </FlexItem>
        <FlexItem>
          <P center full>Jest</P>
        </FlexItem>
        <FlexItem>
          <P center full>Flow</P>
        </FlexItem>
        <FlexItem>
          <P center full>Prisma</P>
        </FlexItem>
      </FlexContainer>
    </div>
  );
}
