

import OrthographicScene from '../scenes/OrthographicScene'
import PerspectiveScene from '../scenes/PerspectiveScene'
import WebGLManager from '../WebGLManager'

export default class Manager extends WebGLManager {

    setUpScene() {
        this.scenes.push(new OrthographicScene(this.layersFolder, this.resolution, this.removeScene));
        this.scenes.push(new PerspectiveScene(this.layersFolder, this.resolution, this.removeScene));
        this.scenes.push(new OrthographicScene(this.layersFolder, this.resolution, this.removeScene));
        
        this.scenes[0].addItemFromText("Background");
        this.scenes[1].addItemFromText("Particles");
        this.scenes[2].addItemFromText("JSNation");
        
        this.gui.__folders["Overview"].onResize();
        
    }

}