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
            src="https://placehold.it/300x300"
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
        <P center full>I build stuff</P>
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
      <P center full>
        Much of my work contains time-sensitve material and is not my own intellectual property. If you would like to view these work samples, please reach out to me at <a href="mailto:ben@mrbenj.io">ben@mrbenj.io</a>
      </P>
    </div>
  )
}
