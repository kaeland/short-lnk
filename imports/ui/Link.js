import React from 'react';

import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';

// Stateless functional Component
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
}
