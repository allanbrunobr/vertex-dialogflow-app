import React from 'react';
import './App.css';
import VertexDialogflowIntegration from './VertexDialogflowIntegration';

// Corrigindo a declaração de tipo do componente
function App(): React.ReactNode {  // Alterado de JSX.Element para React.ReactNode
  return (
    <div className="App">
      <VertexDialogflowIntegration />
    </div>
  );
}

export default App;