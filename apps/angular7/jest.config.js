module.exports = {
  name: 'angular7',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular7/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
