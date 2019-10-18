module.exports = {
  schema: [
    {
      'https://graphql-santa-app.herokuapp.com/v1/graphql': {},
    },
  ],
  //   documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  './src/generated/graphql.tsx': {
    plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    config: {
      skipTypename: false,
      withHooks: true,
      withHOC: false,
      withComponent: false,
    },
  },
  generates: {
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
