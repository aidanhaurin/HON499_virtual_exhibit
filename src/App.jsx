import React, { useState } from 'react'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'
import '@photo-sphere-viewer/markers-plugin/index.css';
import './App.css'
import { getPlugins } from './utils/myPlugins';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { modelPicker } from './utils/modelPicker';
import ModelViewerContainer from './components/ModelViewerContainer';
import JSONTemplates from './components/JSONTemplates';
import ReactModal from 'react-modal';
import { ModalContentsContainer } from './components/ModalContentsContainer';
import { PageFooter } from './components/PageFooter';
import { PageInfoBody } from './components/PageInfoBody';

ReactModal.setAppElement('#root');

function App() {

  //ordered array for template id's
  const templateIds = [
    "template_tiredtravelers",
    "template_ruedelasante",
    "template_moredistant",
    "template_whistler",
    "template_lager",
    "template_mary",
    "template_camelid",
    "template_americana",
    "template_doorofjustice",
    "template_gloucester",
    "template_thequest",
  ];

  //useRefs
  const photoSphereRef = React.useRef();

  //useStates
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [plugins, setPlugins] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [modalMode, setModalMode] = useState("none");

  //------------ other functions ------------
  const handleTemplatesReady = (data) => {
    //the templates are loaded in by now
    setPlugins(getPlugins());
    setTemplates(data);
  }//const

  const handlePsvReady = (psv) => {
    //set up marker selection
    const markersPlugs = psv.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    markersPlugs.addEventListener("select-marker", (e) => {
      //get the id's
      const markerId = parseInt(e.marker.id)
      console.log("selected marker:", markerId);

      //set the indices
      setSelectedIndex(markerId);
      setSelectedModel(modelPicker(markerId));
      setSelectedTemplate(templateIds[markerId] ?? "");
    });

    //set up panel event listener
    psv.addEventListener("hide-panel", () => {
      setSelectedIndex(-1);
      console.log("Hide-panel event.");
    })

    //add detection for modals
    psv.container.addEventListener('click', (e) => {
      if (e.target.closest('#button-modal-notes')) {
        setModalMode("notes");
      }//if
    });

    psv.container.addEventListener('click', (e) => {
      if (e.target.closest('#button-modal-desc')) {
        setModalMode("desc");
      }//if
    });

    psv.container.addEventListener('click', (e) => {
      if (e.target.closest('#button-modal-help')) {
        setModalMode("help");
      }//if
    });
  }//const

  return (
    <div id='page'>
      <header>
        <a href='https://artcollection.lasalle.edu/' target='_blank'>
          <img src='artmuseum_logo.png' className='logo'/>
        </a>
      </header>
      <br/>
      
      <div className='pageHeader'>
        <h2>
          Aidan Haurin's HON499 Virtual Exhibit
        </h2>
      </div>

      <JSONTemplates 
        onReady={handleTemplatesReady}
      />

      {/* modal goes here */}
      <ReactModal 
        isOpen={(modalMode !== "none")} 
        onRequestClose={() => setModalMode("none")}
        parentSelector={() => document.querySelector('#div_MVandPSV')}
        overlayClassName={"ReactModal-Overlay"}
        className={"ReactModal-Content"}
      >
        <ModalContentsContainer
          modalMode={modalMode}
          setModalMode={setModalMode}
          selectedTemplate={selectedTemplate}
          templates={templates}
        />
      </ReactModal>
      
      <div id='div_MVandPSV'>
        {/*Toggleable model viewer overlay component*/}
        <ModelViewerContainer
          selectedIndex={selectedIndex}
          selectedModel={selectedModel}
        />
        
        <div className="psv_div">
          {plugins.length > 0 ? <>
            <ReactPhotoSphereViewer
              ref={photoSphereRef} 
              src="panorama_22mar2026_bright.png"
              height={'90vh'} 
              width={"100%"}
              plugins={plugins}
              onReady={handlePsvReady}
              navbar={[
                'zoom', 
                'move', 
                'markersList',
                {
                  //"Help" button
                  content: (() => {
                    const helpButton = document.createElement('button');
                    const helpButtonImg = document.createElement('img');
                    helpButtonImg.src = 'bootstrap_icons/question-circle.svg';
                    helpButton.appendChild(helpButtonImg);
                    helpButton.className = "panel-button";
                    helpButton.id = "button-modal-help";
                    helpButton.addEventListener('click', () => setModalMode("help"));
                    return helpButton;
                  })()
                },
                'caption',
              ]}
              caption='HON499 Virtual Exhibit'
            ></ReactPhotoSphereViewer>
          </> : <></>}
        </div>
      </div>
      <br/>

      {/* all of the non-panorama information */}
      <PageInfoBody
        templates={templates.sort((a, b) => a.title.localeCompare(b.title))}
      />

      <PageFooter/>
    </div>
  )
}

export default App
