import React from 'react';
import './Shoping.css'; // Import your CSS file for styling

const Shoping = () => {
  const products = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?w=500&auto=format&fit=crop&w=150&q=80",
      title: 'Product 1',
      price: '$10',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1738330094168-6e9728731ce8?w=500&auto=format&fit=crop&w=150&q=80',
      title: 'Product 2',
      price: '$20',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?w=500&auto=format&fit=crop&w=150&q=80',
      title: 'Product 3',
      price: '$30',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      title: 'Product 4',
      price: '$40',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      title: 'Product 5',
      price: '$50',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      title: 'Product 6',
      price: '$60',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      title: 'Product 7',
      price: '$70',
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        title: 'Product 8',
        price: '$80',
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1735078254602-b7818942c324?w=500&auto=format&fit=crop&w=150&q=80',
        
        title: 'Product 9',
        price: '$80',
      },
  ];

  return (
    <div className="container">
        <h2 className='Shop-hed'>Shoping Card</h2>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} className="card-image" />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoping;