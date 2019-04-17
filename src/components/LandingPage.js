import React from 'react';
import PostList from '../Datalist/PostList';

import Footer from './Footer.jsx';

const LandPage = () => (
  <div className="box-lo">
    <div className="landing">
      <p>Landing Page</p>
      <PostList />
    </div>
    <Footer />
  </div>
);

export default LandPage;
