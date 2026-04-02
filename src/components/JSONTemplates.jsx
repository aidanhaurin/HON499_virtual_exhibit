import { useEffect, useState } from "react";
import { getTemplatesJSON } from "../utils/getTemplatesJSON";
import parse from 'html-react-parser';

const JSONTemplates = ({ onReady }) => {
    //useStates
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            const data = await getTemplatesJSON();
            setTemplates(data);
        };
        fetchTemplates();
    }, []);

    //call onReady once templates are loaded in
    useEffect(() => {
        if (templates.length > 0) {
            onReady?.(templates);
        }
    }, [templates]);

    return <>
        {
            templates.map( (temp, index) => (
                <div id={`${temp.id}`} key={index} style={{ display: 'none' }}>
                    <h1>{temp.title}</h1>

                    <img src={`${temp.image}`} width={"360px"}></img>

                    <p>
                        <strong>Artist: </strong> {temp.metadata.artist}<br/>
                        <strong>Year Created: </strong> {temp.metadata.year_created}<br/>
                        <strong>Place of Creation: </strong> {temp.metadata.place_of_creation}<br/>
                        <strong>Dimensions: </strong> {temp.metadata.dimensions}<br/>
                        <strong>Medium: </strong> {temp.metadata.medium}<br/>
                        <strong>Collection: </strong> 
                            {temp.metadata.collection?.map((c, i) => (
                                <>
                                    <a target="_blank" href={c.url} key={i+(index*10)}>{c.label}</a> &nbsp;
                                </>
                            ))}
                        <br/>
                        <strong>Current Location:</strong> {temp.metadata.current_location}<br/>
                        {temp.metadata.credit_line !== null ? <>
                            <strong>Credit Line: </strong> {temp.metadata.credit_line}<br/>
                        </> : <>
                        </>}
                        <strong>Accession Number: </strong> {temp.metadata.accession_number}<br/>
                    </p>

                    {temp.description !== null ? <>
                        <h2>
                            Description
                            &nbsp;
                            <button id="button-modal-desc" className="panel-button">
                                <img src="bootstrap_icons/arrows-angle-expand.svg"/>
                            </button>
                        </h2>
                        <p>
                            {temp.description.split('\n').map((line, i) => (
                                <span key={i}>{line}<br/></span>
                            ))}
                        </p>
                    </> : <></>}

                    <h2>
                        Personal Notes
                        <button id="button-modal-notes" className="panel-button">
                            <img src="bootstrap_icons/arrows-angle-expand.svg"/>
                        </button>
                    </h2> 
                    <div>
                        {parse(temp.personal_notes)}
                    </div>

                    <br/>

                    <a target="_blank" href={`${temp.official_url}`}>
                        <i>View this piece on the official La Salle Art Museum website</i>
                    </a>
                </div>
            ))
        }
    </>
}//const

export default JSONTemplates