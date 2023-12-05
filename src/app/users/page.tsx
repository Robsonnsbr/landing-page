'use client';

import React, { useEffect } from 'react';

export default function Users() {
  useEffect(() => {
    throw new Error('Deu ruim no Users2!');
  }, []);

  return (
    <div>
      <p>Users Teste!</p>
    </div>
  );
}
