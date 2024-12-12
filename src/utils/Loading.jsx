import { useState, useEffect } from 'react';
import './src/gif.gif';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoading ? (
        <img src={loadingGif} alt="Loading..." width="100" />
      ) : (
        <div>Data telah dimuat!</div>
      )}
    </div>
  );
}

export default App;
