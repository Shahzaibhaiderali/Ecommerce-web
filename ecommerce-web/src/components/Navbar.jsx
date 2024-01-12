import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div className="mx-auto w-70">
    <ul className="flex justify-center items-center bg-white p-4 shadow-md rounded-lg">
        <li>
            <Link to="/" className="text-coffee hover:text-coffee-dark px-4 py-2 rounded-lg">Home</Link>
        </li>
        <li>
            <Link to="/about" className="text-coffee hover:text-coffee-dark px-4 py-2 rounded-lg">About</Link>
        </li>
        <li>
            <Link to="/contact" className="text-coffee hover:text-coffee-dark px-4 py-2 rounded-lg">Contact</Link>
        </li>
        <li>
            <Link to="products/jdasoijdoisajdpoiwjdaoiAJD" className="text-coffee hover:text-coffee-dark px-4 py-2 rounded-lg">Products</Link>
        </li>
        <li className="ml-auto">
            {/* Assuming your logo is an image */}
            <img src="path/to/your-logo.png" alt="SH Logo" className="h-8 w-8" />
        </li>
    </ul>
</div>

  )
}

export default Navbar