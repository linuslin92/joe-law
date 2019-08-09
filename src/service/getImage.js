const image = require.context('../src');

export default function getImage (str) {
    try {
        return image(str);
    } 
    catch(e) {
        return e;
    }
}