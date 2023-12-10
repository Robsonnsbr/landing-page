'use client';

import { useFormStatus } from 'react-dom';

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`bg-primaryColor h-12 w-full rounded-sm ${
        pending && 'opacity-60'
      }`}
      type="submit"
    >
      <span className="text-white">{pending ? 'Enviando...' : 'Enviar'}</span>
    </button>
  );
}

export default Button;
