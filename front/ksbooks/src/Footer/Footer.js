import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    const year = new Date();
  return (
    <footer>
        <p className="text-center py-3">Copyright &copy; {year.getFullYear()}, KSBooks</p>
        
    </footer>
  
  )
};

export default Footer
