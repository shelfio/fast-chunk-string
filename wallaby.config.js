module.exports = () => {
  return {
    testFramework: 'jest',
    files: ['package.json', 'index.ts', '!index.test.ts'],
    tests: ['index.test.ts'],
    env: {
      type: 'node',
      runner: 'node'
    },
    setup(wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
