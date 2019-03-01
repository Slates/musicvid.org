
import * as THREE from "three";
import BaseItem from './BaseItem'
import { addOrthoMeshControls }  from '../../../util/AddMeshControls'


const fonts = ["Montserrat", "Anton", "Carrois Gothic SC", "Arial", "Helvetica", "Times New Roman", "Times", "Courier New", "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS"]



export default class Polartone extends BaseItem {
    constructor(info) {
        super();
        this.canvas = document.createElement("canvas");
        this.textureResolutionWidth = 1024;
        this.textureResolutionHeight = 512;

        this.canvas.height  = this.textureResolutionHeight;
        this.canvas.width  = this.textureResolutionWidth;

        this.ctx = this.canvas.getContext("2d");

        this.fontSize = 30;
        this.font = "Montserrat";
        this.positionX  = 0;
        this.positionY  = 0;
        this.textureScale = 0.5;
        this.ctx.fillStyle = "#FFFFFF";
        this.aspect = info.width/info.height;
        this.text = "Example Text";
        this.ctx.textAlign = "center";
        this.textAlign ="center";

        
        this.tex = new THREE.CanvasTexture(this.canvas);
        this.mat = new THREE.MeshBasicMaterial({transparent: true, map: this.tex})

        //this.mat = new THREE.MeshBasicMaterial({map:tex, transparent: true});
        this.geo = new THREE.PlaneGeometry(2, this.aspect);
        this.mesh = new THREE.Mesh(this.geo, this.mat);
        this.mesh.scale.set(this.textureScale, this.textureScale, this.textureScale)
        this.folder = this.setUpGUI(info.gui, "Polartone");

        this.updateText();
        info.scene.add(this.mesh);

        this.ctx.fillStyle = "#FFFFFF";
    }

    setText = (text, x, y, options) => {

        if(options.fontSize) this.fontSize = options.fontSize;
        if(options.textAlign) this.textAlign = options.textAlign;


        this.text = text;
        this.positionX = x;
        this.mesh.position.x = this.positionX;
        this.positionY = y;
        this.mesh.position.y = this.positionY;
        this.updateText();
    }

    updateText = () => {
        const {width,height} = this.canvas;
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.font = `normal ${this.fontSize}px ${this.font}`;
        this.ctx.textAlign = this.textAlign;
        this.tex.needsUpdate = true;
        this.ctx.fillText(this.text, width/2, height / 2)
    }

    setSize = () => {
        this.canvas.width = Number(this.textureResolutionWidth);
        this.canvas.height = Number(this.textureResolutionHeight);
        this.updateText();
    }

    setUpGUI = (gui, name) => {
        const folder = gui.addFolder(name);
        folder.add(this, "text").onChange(this.updateText);
        folder.add(this, "font", fonts).onChange(this.updateText);
        folder.add(this, "fontSize", 0, 300).onChange(this.updateText);
        folder.addColor(this.ctx, "fillStyle");
        addOrthoMeshControls(this, this.mesh, folder);

        return folder;
    };

    update = (time, data) => {  };
}


