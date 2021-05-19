`import { SbSidebarModule } from '@sb/components'` in app.module

We cannot represent the component **sidebare** here as it is a fixed element (position: fixed).  
It is composed of 2 parts:
- the sidebar on the left
- the hamburger icon that is only displayed on mobile

If you are doing an application for only large screens (not for mobile) you will not have to take care about the last 2 parts (icon + black layer) as they will not be displayed on those resolutions.

##### The sidebar
This element is the large grey bar you see on the left.  
It is expecting 2 different blocks inside it: 
- sb-sidebar-logo where you can put the svg logo (you can additionally put a small version of the logo that will be shown only when you collapse the sidebar)
- sb-sidebar-menu where you can put the sb-menu component from our library or anything else (like an input to search inside the menu for example).

Here is an example of use:
```html
<sb-sidebar fixed="true">
    <sb-sidebar-logo>
        <a routerLink="/welcome-page">
            <mat-icon svgIcon="company-logo" class="normal-logo"></mat-icon>
            <mat-icon svgIcon="company-logo-mini" class="mini-logo"></mat-icon>
        </a>
    </sb-sidebar-logo>
    
    <sb-sidebar-menu>
        <sb-menu [model]="menuModel"></sb-menu>
    </sb-sidebar-menu>
</sb-sidebar>

```

##### The hamburger icon
This is a common icon that exist in websites that support mobile format.  
We have created one too to interact with our sidebar. You can but it wherever you want but we recommend you to put it on left side of the banner.  
As said before, it will be displayed only on mobile resolution.

```html
<sb-sidebar-toggle-icon> </sb-sidebar-toggle-icon>

```
