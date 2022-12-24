import React, { useEffect, useState } from 'react';
import Map from './Map';

const Index = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/chapters');
      const data = await response.json();
      setLocations(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Map locations={locations} />
    </div>
  );
};

export default Index;