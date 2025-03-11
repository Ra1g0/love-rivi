import React from 'react';
import Header from "../Components/Header"; 
import Footer from "../Components/Footer";
import "../App.css"; 

function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Home Page</h2>
        <p className="text-lg">
          This is the homepage of our website. Here you can find various information and navigate to different sections using the header links.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;