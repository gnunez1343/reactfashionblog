// import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Article from './components/Article';

import image1 from './assets/blog-image-1.jpg'
import image2 from './assets/blog-image-2.jpg'

function App() {

  return (
    <>
    <div>
      <Header />
      <main>
        <Article 
          date="11/12/20"
          title="One the Street in BRONX"
          image={image1}
          content="Bronx is home of the greatest fashion"
          />

          <Article 
          date="11/11/20"
          title="Vintage in Vogue"
          image2={image2}
          content="Vintage in Vougue is hotter than ever !"
          />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App