module.exports = {
  schema: [
    {
      'https://graphql-santa-app.herokuapp.com/v1/graphql': {},
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  config: {
    scalars: { uuid: 'string' },
    namingConvention: {
      typeNames: 'change-case#pascalCase',
      enumValues: 'change-case#upperCase',
      transformUnderscore: true,
      avoidOptionals: true,
    },
  },
}
