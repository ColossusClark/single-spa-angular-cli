module.exports = (angularWebpackConfig) => {
  return {
    ...angularWebpackConfig,
    module: {
      ...angularWebpackConfig.module,
      rules: [
        ...angularWebpackConfig.module.rules,
        {
          parser: {
            system: false
          }
        }
      ]
    }
  };
}
