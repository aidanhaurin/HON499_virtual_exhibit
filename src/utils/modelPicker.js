//switch out model name based on current index
export const modelPicker = (ind) => {
    let filename = "";

    switch(ind){
      case 0:
        filename = "tiredtravelers";
        break;
      case 1:
        filename = "ruedelasante"
        break;
      case 2:
        filename = "distantpart"
        break;
      case 3:
        filename = "whistler"
        break;
      case 4:
        filename = "lagerbeersaloon"
        break;
      case 5: 
        filename = "mary"
        break;
      case 6:
        filename = "camelid"
        break;
      case 7:
        filename = "americana"
        break;
      case 8:
        filename = "doorofjustice"
        break;
      case 9:
        filename = "gloucester"
        break;
      case 10:
        filename = "thequest"
        break;
    }//switch

    return "models/" + filename + "_export.glb";
  }//const