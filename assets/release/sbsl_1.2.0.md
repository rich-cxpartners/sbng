#### About this release:

**Version:** 1.2.0  
**Release date:** 16/02/2020

<br>

#### 1. How to install it

```bash
npm install @sb/security@1.2.0
```

#### 2. Changes

##### Angular 9

This library has been updated to Angular 9.  
Please note that we are retrocompatible with application in angular 8 for now.  
But in few versions we will compile our library only for Angular 9 (september 2020) so think about upgrading your application to angular 9.
[You can use this tool to help you to migrate](https://update.angular.io/)

##### SbSecurity interceptor

We corrected the fact that our interceptor erased headers put by previous interceptors.  
Now it keep those and add correctly the headers to the request.

##### Token storage inside WKS Portal

Before: We used SBSettings (inside environnement.ts and environnement.prod.ts files) to chose the storage and the name for the JWT
Now: If we are on workstation, the token is now set in memory to avoid any side effects when multiple applications are opened in workstation.  
On top of that, if the application is closed, the token goes with it and do not stay as it does with browser storage.

The standalone mechanism stay the same.

##### WKS 1.8.5

We have updated the library to WKS 1.8.5 version. It does not mean that you must use WKS 1.8.5.  
Even if it's better to do it, it is still compatible with previous versions.

#### 3. Breaking changes

None

#### 4. The commit on the starter kit

[Commit](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/-/commit/2638725700f836c6e42ee2d6b935699b3523d23e)

