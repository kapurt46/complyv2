import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './InputBox.css';

const InputBox = forwardRef((props, ref) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      props.onSubmit(input);
      setInput('');
    }
  };

  useImperativeHandle(ref, () => ({
    handleSend
  }));

  return (
    <div className="input-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Go to the section to Change and prompt here to change it..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
});

export default InputBox;
