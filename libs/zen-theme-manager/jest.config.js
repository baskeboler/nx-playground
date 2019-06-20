module.exports = {
  name: 'zen-theme-manager',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/zen-theme-manager',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
