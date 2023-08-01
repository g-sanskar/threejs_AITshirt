import { proxy } from "valtio";

// declaring valtio state
const state = proxy({
    // are we currently in home page
    intro: true,
    // def color
    color: '#EFBD48',
    //is logo currently displaying
    isLogoTexture: true,
    //is texture applied
    isFullTexture: false,
    // intial rendering logo and texture
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;