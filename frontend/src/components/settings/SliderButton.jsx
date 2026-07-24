import { useState } from 'react';

export default function SliderButton({label}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='flex gap-4 items-center'>
        <label className="flex items-center id-cursor-pointer select-none">
      {/* Hidden checkbox for accessibility */}
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      
      {/* Track */}
      <div className={`
        relative w-8 h-4 rounded-full transition-colors duration-300 ease-in-out
        ${enabled ? 'bg-black' : 'bg-gray-300'}
      `}>
        {/* Handle */}
        <div className={`
          absolute bg-white w-4 h-4 rounded-full shadow-md 
          transition-transform duration-300 ease-in-out
          ${enabled ? 'translate-x-4' : 'translate-x-0'}
        `} />
      </div>
    </label>
    <div>
        <p>{label}</p>
    </div>
    </div>
  );
}
