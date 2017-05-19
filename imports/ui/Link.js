import React from 'react';

import { Links } from '../api/links';
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';

// Stateless functional Component
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>
    </div>
  );
}
