// Copy text box component, 'code' -prop is shown and copied to Clipboard.

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps): React.JSX.Element {
  // Local state manages the button text independently for each block
  const [buttonText, setButtonText] = useState<string>('Copy');

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setButtonText('Copied!');
      
      // Reset text back to 'Copy' after 2 seconds
      setTimeout(() => {
        setButtonText('Copy');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    /* Copy Box Component Start */
    <div className="code-block" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
      
      <button className="copy-btn" onClick={handleCopy}>
        <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '5px' }}>
          content_copy
        </span>
        {buttonText}
      </button>
    </div>
    /* Copy Box Component End */
  );
}

