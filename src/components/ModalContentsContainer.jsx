import parse from 'html-react-parser';
import { ModalHelpSection } from './ModalHelpSection';

export const ModalContentsContainer = ({modalMode, setModalMode, selectedTemplate, templates}) => {

    const currentTemplate = templates.find(t => t.id === selectedTemplate);

    const getHeaderName = () => {
        switch(modalMode){
            case "desc":
                return "Description"
            case "help":
                return "Help"
            case "notes":
                return "Personal Notes"
            case "none":
                return ""
        }//switch
    }//const

    const getContentsFromTemplate = () => {
        switch(modalMode){
            case "desc":
                return <>
                    {currentTemplate.description.split('\n').map((line, i) => (
                        <span key={i}>&emsp;{line}<br/></span>
                    ))}
                </>
            case "help":
                return <>
                    <ModalHelpSection/>
                </>
            case "notes":
                return <>
                    &emsp;{parse(currentTemplate.personal_notes)}
                </>
            case "none":
                return <></>
        }//switch
    }//const

    return <>
        <h1>
          {
            getHeaderName()
          }
          <button className="panel-button" onClick={() => {setModalMode("none")}}>
            <img src="bootstrap_icons/x-lg.svg"/>
          </button>
          <hr></hr>
        </h1>

        <div>
          {getContentsFromTemplate()}
        </div>
    </>
}//const