import { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/v1/health`)
      .then(r => r.json())
      .then(d => setStatus(d.db ? 'API + DB connected' : 'API up, DB down'))
      .catch(() => setStatus('API unreachable'));
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg font-medium">{status}</p>
      </div>
    </>

  );
}