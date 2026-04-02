export const ModalHelpSection = () => {
    return <>
        <h2>Using the Model Viewer</h2>
        <ul>
            <li>
                Left Click → Center the camera on the cursor
            </li>
            <li>
                Left Press → Rotate the Model in place
            </li>
            <li>
                Shift + Left Press → Pan around the Model
            </li>
            <li>
                Mousewheel → Zoom in and out of the Model
            </li>
        </ul>
        <i>The same controls apply to the right and middle mouse buttons.</i>
        <br/>
        <i>Some of these models are a bit large, so it might take a couple seconds for the viewer to load in.</i>
        <br/>

        <h2>Using the Panorama</h2>
        <ul>
            <li>
                Left Press → Rotate around the panorama
                <ul>
                    <li>
                        This can also be done with the magnifying glasses/"zoom" bar ( <img src="helpsection/help_zoombar.png" className="helpsection-smallicon"/> ) in the navbar.
                    </li>
                </ul>
            </li>
            <li>
                Mousewheel → Zoom in and out of the panorama
                <ul>
                    <li>
                        This can also be done with the arrow buttons ( <img src="helpsection/help_move.png" className="helpsection-smallicon"/> ) in the navbar.
                    </li>
                </ul>
            </li>
            <li>
                Clicking the "markers" icon ( <img src="helpsection/help_markers.png" className="helpsection-smallicon"/> ) will provide a list of "markers" for each piece in the exhibit. 
                Clicking on one will automatically shift the panorama to focus on it: <br/>
                <img src="helpsection/help_markerslist.png" height={"512px"}/>
            </li>
        </ul>
        <br/>

        <h2>Using the Side-Panel</h2>
        <ul>
            <li>
                Clicking a "twin arrows" icon ( <img src="bootstrap_icons/arrows-angle-expand.svg"/> ) will open a popover window for easier reading.
            </li>
            <li>
                Pressing "Esc" will close out of both the side-panels and the popover windows.
            </li>
        </ul>
    </>
}//const