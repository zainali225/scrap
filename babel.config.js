module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'react-native-reanimated/plugin',
    ["module-resolver", {

      "alias": {
        "@services": "./src/services",
        "@api": "./src/api",
        // "@theme": "./src/theme",
      }
    }]
  ]
};
