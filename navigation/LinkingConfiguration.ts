import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              LogIn: 'LogIn',
            },
          },
          TabTwo: {
            screens: {
              SignUp: 'SignUp',
            },
          },
        },
      },
      Tenants: {
        screens: {
          TabOne: {
            screens: {
              Tenants: 'Tenants',
            },
          },
          TabTwo: {
            screens: {
              Postings: 'Postings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
