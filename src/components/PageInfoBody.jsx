export const PageInfoBody = ({templates}) => {
    return <>
        <div className='pageHeader'>
          <h2>
            About the project
          </h2>
        </div>
        <div className="page-content" style={{margin: "auto", width: "90%"}}>
            <p className="p-paragraph">
                This is a project for my La Salle Honors Program capstone, featuring several pieces from the La Salle Art Museum!
                All of them are presented in a panorama you can move around in, and clicking on one of them will provide a little 3D model and some extra information about the piece.
                To get started, you might want to click on the "help" icon ( <img src="bootstrap_icons/question-circle-dark.svg"/> ) to learn how to move around.
            </p>
            <p className="p-paragraph">
                I've always had an interest in learning how various forms of digital media are made as well as in making some of my own interactive experiences. 
                That said, La Salle also prominently features plenty of physical media and resources for their students to access and draw inspiration from, and I wanted to show some appreciation for that.
                I've already got experience in 3D modelling and web development, and I've used the Art Museum's resources for Digital Arts and Honors work in the past, so I thought it'd be a natural fit.
            </p>
            <p className="p-paragraph">
                <i>-Aidan Haurin</i>
            </p>
        </div>

        <div className='pageHeader'>
          <h2>
            Featured Pieces
          </h2>
        </div>
        <div className="page-content">
            <div id="page_pieces_grid">
                {templates.map((temp, index) => (
                    <div>
                        <a target="_blank" href={`${temp.official_url}`}>
                            <img src={`${temp.image}`} href={`${temp.official_url}`}/> <br/>
                            <p>
                                {`${temp.title}`}
                            </p>
                        </a>
                        <p>
                            <i>
                                {temp.metadata.artist.indexOf('(') > 0 ? (
                                <>
                                    {temp.metadata.artist.substring(0, temp.metadata.artist.indexOf('('))}
                                    <br/>
                                    {temp.metadata.artist.substring(temp.metadata.artist.indexOf('('))}
                                </>
                                ) : (
                                    temp.metadata.artist
                                )}
                            </i>
                        </p>
                    </div>
                ))}
            </div>
        </div>
        <br/>

        <div className='pageHeader'>
          <h2>
            Credits
          </h2>
        </div>
        <div className="page-content" id="page_credits">
            <h3>Resources</h3>
            <ul>
                <li>
                    <a target="_blank" href="https://artcollection.lasalle.edu/">artcollection.lasalle.edu</a>
                    &nbsp;-&nbsp;
                    the official website for the La Salle Art Museum. Used for high-resolution <br/> 
                    scans of and fetching information about each piece.
                </li>

                <li>
                    <a target="_blank" href="https://docs.github.com/en/pages">GitHub Pages</a>
                    &nbsp;-&nbsp;
                    used for hosting the webpage.
                </li>
            </ul>

            <h3>Software Used</h3>
            <ul>
                <li>
                    <a target="_blank" href="https://react.dev/">
                        React
                    </a>
                    &nbsp;and&nbsp;
                    <a target="_blank" href="https://vite.dev/">
                        Vite
                    </a>
                    &nbsp;-&nbsp;
                    used for building the webpage and handling logic.
                </li>

                <li>
                    <a target="_blank" href="https://photo-sphere-viewer.js.org/">
                        Photo Sphere Viewer
                    </a>
                    &nbsp;and&nbsp;
                    <a target="_blank" href="https://www.npmjs.com/package/react-photo-sphere-viewer">
                        react-photo-sphere-viewer
                    </a>
                    &nbsp;-&nbsp;
                    used for creating the panorama and side-panels.
                </li>

                <li>
                   <a target="_blank" href="https://modelviewer.dev/?ref=threejsresources">
                        {"<model-viewer>"}
                   </a>
                   &nbsp;-&nbsp;
                   used for creating 3D model viewer overlay.
                </li>

                <li>
                    <a target="_blank" href="https://www.npmjs.com/package/react-modal">
                        react-modal
                    </a>
                    &nbsp;-&nbsp;
                    used for creating and managing the popup windows.
                </li>

                <li>
                    <a target="_blank" href="https://www.npmjs.com/package/html-react-parser">
                        react-html-parser
                    </a>
                    &nbsp;-&nbsp;
                    used for converting some of the JSON descriptions into HTML.
                </li>

                <li>
                    <a target="_blank" href="https://www.blender.org/">
                        Blender
                    </a>
                    &nbsp;-&nbsp;
                    used for creating the 3D models.
                </li>
            </ul>
            
            <h3>Special Thanks</h3>
            <ul>
                <li>
                    <strong>Dr. Carolyn Green Ph.D</strong> - Director and Chief Curator of the La Salle Art Museum, granted <br/>
                    permission on behalf of the Museum to use its resources.
                </li>

                <li>
                    <strong>Rebecca Oviedo, Dr. Thomas Blum Ph.D, Liana Rose D. Salazar, and Tricia Sackor</strong> - credited with 
                    writing descriptions <br/> for <i>Americana</i>, <i>More Distant Part of the Sea</i>, <i>The Quest</i>, and <i>Tired Travelers</i>, respectively.
                </li>
                
                <li>
                    <strong>Prof. Geoffrey Beatty</strong> - key mentor and advisor throughout the project.
                </li>

                <li>
                    <strong>Dr. Marco Cerocchi Ph.D; Alex Cook Jr., Jennifer Gomez Maldonado, and Noah Callahan</strong> - providing feedback for the project as part of the course.
                </li>
            </ul>
        </div>
        <br/>
    </>
}//const