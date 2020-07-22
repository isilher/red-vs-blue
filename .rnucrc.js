var ncp = require('ncp').ncp;

module.exports = {
  on_env: async function (env) {
    // Copy Android res folder
    const resSourceFolder = `./assets/android/${env.WHITE_LABEL_ID}/res/`;
    const resDestFolder = "./android/app/src/main/res/";
    ncp(
      resSourceFolder,
      resDestFolder,
      err => {
        if (err) {
          return console.error(err);
        }
        console.log('copied android resources!');
      })

    // Copy iOS icon set
    const xcassetsSourceFolder = `./assets/ios/${env.WHITE_LABEL_ID}/AppIcon.appiconset/`;
    const xcassetsDestFolder = './ios/RedVSBlue2/Images.xcassets/AppIcon.appiconset/';
    ncp(xcassetsSourceFolder, xcassetsDestFolder, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('copied ios xcassets!');
    });
  },
};
