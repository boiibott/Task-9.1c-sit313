
import React from 'react';
import Article from './Article';
import Tutorials from './Tutorials';
import Email from './Email';
import Footer from './Footer';
import MainImage from './MainImage'

function Dashboard() {
  return (
    <div>
      <MainImage/>
      <Article />
      <Tutorials />
      <Email />
      <Footer />
    </div>
  );
}

export default Dashboard;
