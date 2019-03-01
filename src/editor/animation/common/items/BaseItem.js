import license from '../../../util/License'

export default class BaseItem {
    LICENSE = license;
    __attribution = {
        showAttribution: false,
        name:"",
        authors: [
        ],
        description: "",
        license: "",
        changeDisclaimer: true,
        imageUrl: ""
    }

    update = () => {}
    stop = () => {}
    play = () => {}
    setUpGUI =  () => {}
}