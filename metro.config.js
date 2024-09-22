import path from 'path';
import { fileURLToPath } from 'url';

const { getDefaultConfig } = require("expo/metro-config");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { withNativeWind } = require('nativewind/metro');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = getDefaultConfig(__dirname);
const sentryConfig = getSentryExpoConfig(__dirname);

const mergedConfig = {
  ...config,
  ...sentryConfig,
  transformer: {
    ...config.transformer,
    ...sentryConfig.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  },
  resolver: {
    ...config.resolver,
    ...sentryConfig.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"],
  },
};

module.exports = withNativeWind(mergedConfig, { input: './global.css' });