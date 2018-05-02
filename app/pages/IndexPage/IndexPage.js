// @flow
import React, { type Node } from 'react';
import { Link } from 'react-router-dom';

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
        <P center full>World&apos;s Okayest Full Stack Web Engineer</P>
      </FlexContainer>
      <FlexContainer>
        <P className="pad main-paragraph" full>
          I work with React, CSS, and Javascript to create web applications that scale big, fast, and wide<br/>
          <br/>
          I&apos;m 100% self taught, but I take time to study the important and practical parts of computer science.
          <br/>
          <Link to="/speaking">I love public speaking</Link> - You can view all my talks <Link to="/speaking">here</Link>
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
          <a href="https://www.72andsunny.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525223235/72logo.png"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.teamone-usa.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525223235/t1logo.png"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.lexus.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525223849/lexus_logo_wh.png"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.zeconomy.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525224675/zeconomy.png"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.diamondfoundry.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525223595/df_logo.jpg"
            />
          </a>
        </FlexItem>
        <FlexItem
          align-self="center"
        >
          <a href="https://www.vraiandoro.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="img"
              src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525223595/vo_logo.png"
            />
          </a>
        </FlexItem>
      </FlexContainer>
      <P className="work-blurb" center>
        Much of the work above (including and furthermore) may contain time-sensitve material and is not my intellectual property. If you would like to view additional samples of my work, please reach out to me at <a href="mailto:ben@mrbenj.io">ben@mrbenj.io</a>
      </P>
      <H center full>Technical Stuff</H>
      <FlexContainer
        align-items="center"
        justify-content="space-around">
        <FlexItem>
          <Image
            className="img"
            src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525225424/ReactJS.png"
          />
        </FlexItem>
        <FlexItem>
          <Image
            className="img"
            src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525225424/node_logo.png"
          />
        </FlexItem>
        <FlexItem>
          <Image
            className="img"
            src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525225424/postgresql-logo.png"
          />
        </FlexItem>
        <FlexItem>
          <Image
            className="img"
            src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525225424/redux_logo.png"
          />
        </FlexItem>
        <FlexItem>
          <Image
            className="img"
            src="https://res.cloudinary.com/dpctxqsij/image/upload/v1525225424/gql_logo.png"
          />
        </FlexItem>
      </FlexContainer>
      <P className="work-blurb">
        Not satisfied? Check out my <a href="" target="_blank" rel="noopener noreferrer">Resume</a>
      </P>
    </div>
  );
}
