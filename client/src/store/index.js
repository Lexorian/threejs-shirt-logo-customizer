import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#d5b247',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;