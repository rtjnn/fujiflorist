import { useState } from 'react';

function AccordionItem({ title, children, isSubItem = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isSubItem ? 'pl-6' : ''} bg-transparent mb-2`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full text-left font-medium
          focus:outline-none
          ${isOpen ? 'text-green-500' : 'text-gray-900'}
          hover:text-green-400
          transition-colors
          ${isSubItem ? 'text-gray-600' : ''}
        `}
      >
        {title}
      </button>
      {isOpen && (
        <div className="pt-2 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
