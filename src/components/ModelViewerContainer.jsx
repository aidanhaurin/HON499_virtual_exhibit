const ModelViewerContainer = ({selectedIndex, selectedModel}) => {
    
    return <>
        {(selectedIndex === -1) ?
            <>
                {/*Nothing goes here because nothing is to be shown*/}
            </> : <>
                <div
                    id='container_modelandprompt'
                >
                    {/*The actual model is shown here*/}
                    <model-viewer 
                        id="modelViewer" 
                        alt="Model Viewer" 
                        src={selectedModel} 
                        shadow-intensity="1" 
                        ar
                        camera-controls 
                        touch-action="pan-y"
                    >
                    </model-viewer>
                
                    {/*TODO: Prompt explaining controls in the background*/}
                </div>
            </>}
        </>
};//const

export default ModelViewerContainer;