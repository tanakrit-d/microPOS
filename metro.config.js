const { getDefaultConfig } = require('expo/metro-config');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);
const sentryConfig = getSentryExpoConfig(projectRoot);

const mergedConfig = {
  ...config,
  ...sentryConfig,
  transformer: {
    ...config.transformer,
    ...sentryConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...config.resolver,
    ...sentryConfig.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...config.resolver.sourceExts, 'svg', 'tsx', 'ts'],
  },
};

module.exports = withNativeWind(mergedConfig, { input: './global.css' });