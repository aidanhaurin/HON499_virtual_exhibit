import React, { useEffect, useRef, useState } from 'react'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'
import '@photo-sphere-viewer/markers-plugin/index.css';
import './App.css'
import MyTemplates from './MyTemplates';
import { getPlugins } from './myPlugins';

function App() {

  //useRefs
  const photoSphereRef = React.useRef();

  //useStates
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    // MyTemplates has mounted by now
    setPlugins(getPlugins());
  }, []);

  return (
    <>
      <MyTemplates></MyTemplates>
      <div className="App">
        <ReactPhotoSphereViewer 
          ref={photoSphereRef} 
          src="panorama_19feb2026.png" 
          height={'100vh'} 
          width={"100%"}
          plugins={plugins}
        ></ReactPhotoSphereViewer>
      </div>
    </>
  )
}

export default App
