export const PageFooter = () => {
    return <footer>
          <ul className='list-wide'>
            <li>
              <p>
                Developed by Aidan Haurin. <br/>
                Last updated: 4/16/2026
              </p>
            </li>

            <li>
              <p>
                © Copyright 2026 La Salle University. <br/>
                I do not own the rights to any paintings featured here.
              </p>
            </li>

            <li>
              <h3>Museum Links</h3>
              <ul style={{listStyle: "none", paddingLeft: "0"}}>
                <li>
                  <a target="_blank" href="https://artcollection.lasalle.edu/">
                    Official Website
                  </a>
                </li>
                
                <li>
                  <a target="_blank" href="https://www.facebook.com/LaSalleUniversityArtMuseum/">
                    Facebook
                  </a>
                </li>
                
                <li>
                  <a target="_blank" href="https://www.instagram.com/lasalleuniversityartmuseum/">
                    Instagram
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://twitter.com/LSUAM">
                    Twitter
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3>Other Links</h3>
              <ul style={{listStyle: "none", paddingLeft: "0"}}>
                <li>
                  <a target="_blank" href="https://github.com/aidanhaurin/HON499_virtual_exhibit">
                    <img src='bootstrap_icons/github.svg'/> GitHub repo
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/aidanhaurin/">
                    <img src='bootstrap_icons/github.svg'/> Aidan's GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
}//const