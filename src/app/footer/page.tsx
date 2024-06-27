import React from 'react';

export default function FooterPage(){
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Aman Bhatti. All rights reserved.</p>
      </div>
    </footer>
  );
};