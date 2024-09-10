import { mount as marketing  } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';


export default () => {
  const ref = useRef(null);


  useEffect(() => {
    marketing(ref.current);
  } );


  return <div ref={ref} />;
}