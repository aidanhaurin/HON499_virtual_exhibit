export const getTemplatesJSON = async() => {
    try {
        //just get the panel templates
        const response = await fetch("paneltemplates.json");
        if (!response.ok) {
            // something went from with the response
            throw new Error(`Response status: ${response.status}`);
        }//if

        // wait for response
        const result = await response.json();
        return result;
    } catch (error) {
      // something went wrong somewhere...
      console.error(error.message);

      // return empty array
      return [];
    }//try-catch
}//const