#### About this release:

**Version:** 10.0.0  
**Release date:** 19/01/2021

<br>

#### 1. How to install it

```bash
npm install @sb/security@10.0.0
```

#### 2. Changes

##### Logout feature
We have added a feature to do whatever you want before the application logout.
A complete documentation is available on our website.

##### Token mock expiracy renew
For a testing purpose a new feature has been added to the mock token mechanism. If in your settings you have activated the mock token mechanism, you can also activate 'mock_token_exp_renew'.

```json
// SB Settings
const settings: SbSettings = {
  ...
  token: {
    generator_url: 'api/v1/tokens',
    generator_name: 'token',
    storage_name: 'sb_token',
    renew_ratio: 0.80,
    mock: true,
    mock_token: 'MOCK_TOKEN',
    mock_token_exp_renew: true
  }
};
```

This feature will:
- Read the mock token value
- Change the expiracy of the token : taking the current date and adding 10min of life to the token
This will help you to test that the renew mechanism is working correctly.
But be carefull when using this, as the signature cannot be generated again on angular side, if you provide the token to a REST API and real back end, the service will reject the call. To avoid these, check the SBF documentation about REST, to inactivate the signature control.

#### 3. Breaking changes

##### At least Angular 9
You must update your application ton angular 9 or higher

#### 4. The commit on the starter kit

[Commit](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/-/commit/ff0c410f62f90725a340804a6a6e2a7e7ad5588d)
