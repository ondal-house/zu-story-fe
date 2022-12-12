import React from 'react';
import Footer from './Footer';
import Header from './Header';

import './Layout.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: React.PropsWithChildren<any>) => {
  return (
    <div id="Layout">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
