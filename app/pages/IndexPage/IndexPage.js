// @flow
import React, { type Node } from 'react';

import Image from '@app/components/Image';
import {
  Paragraph as P,
  Headline as H } from '@app/components/Text';
import FlexContainer from '@app/components/FlexContainer';
import FlexItem from '@app/components/FlexItem';

export default function IndexPage(): Node {
  return (
    <div className="">
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
        <H center>Ben Junya - Worlds okayest programmer</H>
        <P>This is my personal site</P>
      </FlexContainer>
    </div>
  )
}
