module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'ref',
        'ci',
        'test',
        'revert',
        'perf',
        'build',
        'wip',
      ],
    ],
  },
}
