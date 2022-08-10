import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={120}
    viewBox='0 0 500 120'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='-1' y='3' rx='0' ry='0' width='500' height='117' />
  </ContentLoader>
);

export default Skeleton;
