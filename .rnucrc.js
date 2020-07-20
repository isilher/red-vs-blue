var ncp = require('ncp').ncp;

module.exports = {
  on_env: async function (env) {
    // Copy Android res folder
    const sourceFolder = `./android/app/src/${env.RES_ID}/`;
    const destFolder = "./android/app/src/main/";
    ncp(
      sourceFolder,
      destFolder,
      err => {
        if (err) {
          return console.error(err);
        }
        console.log('copied android resources!');
      })
  },
};
