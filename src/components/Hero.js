import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>LIT-HOP Bookstore</h2>
            <h3>A collection of literature <br />From the best in hip-hop</h3>
            <Link className="btn" to="/books">Browse All Books</Link>
        </section>
    )
}

export default Hero
