import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const StyledContentLoader = styled(ContentLoader)`
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    width: 45%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 23%;
  }
`;

const Skeleton = () => {
  const skeletons = [];

  for (let i = 0; i < 8; i += 1) {
    skeletons.push(
      <StyledContentLoader height="100%" viewBox="0 0 265 230">
        <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
        <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
        <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
        <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
      </StyledContentLoader>,
    );
  }

  return skeletons;
};

export default Skeleton;
