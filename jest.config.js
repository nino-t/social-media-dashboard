module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['raf/polyfill'],
  // testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  setupFilesAfterEnv: ['<rootDir>client/setupTests.ts']
}
