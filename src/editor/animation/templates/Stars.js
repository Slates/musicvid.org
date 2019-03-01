

import Scene3DOrthoGraphic from '../common/scenes/Scene3DOrthoGraphic'
import WebGLManager from '../WebGLManager'

export default class Stars extends WebGLManager {

    setUpScene() {
        this.scenes.push(new Scene3DOrthoGraphic(this.gui.__folders["Layers"], this.resolution));
        this.scenes.push(new Scene3DOrthoGraphic(this.gui.__folders["Layers"], this.resolution));
        

        const it1 = this.scenes[0].addItemFromText("StarField");
        const it3 = this.scenes[1].addItemFromText("SpriteTextMask");

        it1.setUpGUI(this.gui.__folders["Overview"], "StarField");
        it3.setUpGUI(this.gui.__folders["Overview"], "Image");

        this.gui.__folders["Overview"].onResize();
    }
}