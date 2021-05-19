#### About this release:

**Version:** 1.1.0  
**Release date:** 17/04/2020

<br>

#### 1. How to install it

```bash
npm install @sb/security@1.1.0
```

#### 2. Changes

##### Fixed some logout case issues
We fixed the fact that the application do not automatically logout when the token recovery went bad.  
It include the case where we can't call the token generator at all and also the case where the token is not good.

##### Fixed Authorization name in headers
The Authorization header was not named correctly in the interceptor that adds headers to the requests.
We removed the unnecessary `s` at the end of the word.

#### 3. Breaking changes

None

#### 4. The commit on the starter kit

[The commit](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/commit/c4fa28bdf86547e32c7fc873081d8b34c90aa32b)
