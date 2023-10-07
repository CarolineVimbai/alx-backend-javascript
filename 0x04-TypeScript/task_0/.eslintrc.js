module.exports = {
  extends: ['airbnb-base'],
  plugins: ['import'],
  rules: {
    'import/extensions': ['error', 'always', { 'js': 'never', 'ts': 'never' }],
    'import/no-unresolved': 'off',
  },
};
