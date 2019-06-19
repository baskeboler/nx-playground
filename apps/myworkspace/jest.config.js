module.exports = {
  name: 'myworkspace',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/myworkspace',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
