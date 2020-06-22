const fs = require("fs");
const replace = require('replace-in-file');

const randomString = (len, charSet) => {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
};

const hash = randomString(8);
fs.renameSync('public/build/bundle.[hash].css', `public/build/bundle.${hash}.css`, e => { if ( e ) console.error('Error: ' + e); });
fs.renameSync('public/build/bundle.[hash].js', `public/build/bundle.${hash}.js`, e => { if ( e ) console.error('Error: ' + e); });

const options = {
  files: 'public/index.html',
  from: '[hash]',
  to: hash,
};

replace(options, (error, _) => {
  if (error) {
    return console.error('Error:', error);
  }
});
