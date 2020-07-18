// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:18080',
  authClientOptions: {
    domain: 'vivekprajapati.auth0.com',
    client_id: 'JQuP2axAB7ZZNbT6MNTIuTB5clYD3gHo',
    audience: 'https://api.bankrupt.com'
  },
  authWellKnownEndpoints: {
    userinfo_endpoint: 'https://vivekprajapati.auth0.com/userinfo'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
