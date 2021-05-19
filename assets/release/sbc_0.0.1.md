#### About this release:

**Version:** 0.0.1  
**Release date:** 10/10/2019

<br>

#### 1. How to install it

As we changed the name of the library for the official release. (before it was sb-components and now it is @sb/components)  
So the first thing to do if you come from alpha version is to run:

```bash
npm uninstall sb-components
```

and then 
```bash
npm install @sb/components
```

Then, npm update will be sufficient later to update the library. 

<br>

#### 2. Changes

##### Added components:
- Banner container (for now it is just a container with good proportions and that is well positioned on your pages)

##### Component update:
- Added scroll to the menu if it is too long

##### IE Compliant:
- We worked on our components to make them IE11 compliant.

##### Other:
- Primefaces datatable colors are now affected by the generated theme of material. For example, it means that selected lines are by default on primary color of the theme. 
- We changed the design of Primefaces dialog to make them closer to Material visual.
- We overrided the z-index of Primefaces toast to make it appear over the banner
- Added a little left border for Material Card components that are inside other Mat card. (Same for expansion Panel)

<br>

#### 3. Breaking changes
- Colors for sb components are now put by default by the library and they are of course based on the Material theming mechanism. 
  - So if you used an old version of the starter kit, you can remove in styles/_variables.scss the different variables for sb components.
  - In mat_theme you will have to remove the map merge we did to add the variable properties to material theming process.

- As the name of the library have changed, you will have to replace the imports everywhere ( replace `import { XXX } from 'sb-components';` by `import { XXX } from '@sb/components';`)

#### 4. The commit on the starter kit
You can refer to the commit we have done on the starter kit. It will help you to solve breaking changes.

[THE COMMIT](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/commit/8bb61d4e77db2acf0b93a94a6ac2715c3b9763c4)