import React from "react";
// create footer to display Copyright and current year
const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright @Awesome Blog ${year} `}</footer>
};

export default Footer;