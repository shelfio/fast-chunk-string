module.exports = () => {
  return {
    testFramework: 'jest',
    files: ['package.json', 'src/index.ts', '!src/index.test.ts'],
    tests: ['src/index.test.ts'],
    env: {
      type: 'node',
      runner: 'node'
    },
    setup(wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
