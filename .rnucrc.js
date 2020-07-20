var ncp = require('ncp').ncp;

module.exports = {
  on_env: async function (env) {
    // Copy Android res folder
    const resSourceFolder = `./android/app/src/${env.RES_ID}/`;
    const resDestFolder = "./android/app/src/main/";
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
    const xcassetsSourceFolder = `./ios/RedVSBlue2/Images.xcassets/${env.ICON_SET_NAME}.appiconset/`;
    const xcassetsDestFolder = './ios/RedVSBlue2/Images.xcassets/AppIcon.appiconset/';
    ncp(xcassetsSourceFolder, xcassetsDestFolder, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('copied ios xcassets!');
    });
  },
};
