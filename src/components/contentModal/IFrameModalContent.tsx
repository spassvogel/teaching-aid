import React, { useState } from 'react';

interface Props {
  // content: IframeContent;
}

const IframeModalContent = (props: Props) => {
  // const {content} = props;
  
  return (
    <iframe
      title="21cc game"
      // src={content.url}
      width="100%"
      // height={content.height}
    /> 
  )
}

export default IframeModalContent;

