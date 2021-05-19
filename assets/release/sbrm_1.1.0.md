#### About this release:

**Version:** 1.1.0  
**Release date:** 16/02/2020

<br>

#### 1. How to install it

```bash
npm install @sb/rest-models@1.1.0
```

#### 2. Changes

##### Angular 9
This library has been updated to Angular 9

##### Empty Business Context values
Before this change, business context attribute set to empty string or 0 were not put inside headers of your secured requests.  
Now we only check if it is null or undefined, if not we add it to the headers.

#### 3. Breaking changes

#### 4. The commit on the starter kit

[Commit](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/-/commit/2638725700f836c6e42ee2d6b935699b3523d23e)

