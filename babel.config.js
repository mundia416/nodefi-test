module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['module:react-native-dotenv'],
    // other settings here
  ],
};
