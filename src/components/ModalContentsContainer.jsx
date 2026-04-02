import parse from 'html-react-parser';
import { ModalHelpSection } from './ModalHelpSection';

export const ModalContentsContainer = ({modalMode, setModalMode, selectedIndex, templates}) => {

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
                    {templates[selectedIndex].description.split('\n').map((line, i) => (
                        <span key={i}>{line}<br/></span>
                    ))}
                </>
            case "help":
                return <>
                    <ModalHelpSection/>
                </>
            case "notes":
                return <>
                    {parse(templates[selectedIndex].personal_notes)}
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