import React,{useState} from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}>Click Here</button>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </>
  );
}

export default App;
