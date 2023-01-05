
const isImageofBase64 = (base64) => {
    let buf = Buffer.from(base64, 'base64');
    require('jimp').read(buf).then(function (img) {
        if (img.bitmap.width > 0 && img.bitmap.height > 0) {
            //console.log('Valid image');
            return true;
        } else {
          return true;
        }
    });
    return true;
}

const randName = (length)=>{
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
     for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
}

module.exports = {isImageofBase64,randName}
