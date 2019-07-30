import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log("React Hooks")
  }, []);

  return (
    <li className='no-repos'>
      <h3>Sorry, no Repos match your search.</h3>
    </li>
  );
}