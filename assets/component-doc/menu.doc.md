To use this component, you have to  
`import { SbMenuItem } from '@sb/components'` in your component  
`import { SbMenuModule } from '@sb/components'` in app.module

This component is inspired from [PrimeNG panelMenu](https://www.primefaces.org/primeng/#/panelmenu). 
There are 4 possible inputs:  

| Name                        | Type     | Default | Description                                                                      |
| --------------------------- | -------- | ------- | -------------------------------------------------------------------------------- |
| styleClass                  | string   | null    | To add a class on the component.                                                 |
| model                       | object   | null    | This is where you describe the structure of the component with SbMenu            |
| multiple                    | boolean  | false   | To be able to open multiple items of the same level.                             |
| activeRouteSynchro          | boolean  | false   | If you navigate to a route that exist in the menu, it will open it automatically |

<br> 

To construct the structure of the menu, you will have to create a tree composed of SbMenuItem (interface).  
Here are the attributes available in this interface:

| Name                    | Type     | Default | Description                                              |
| ----------------------- | -------- | ------- | -------------------------------------------------------- |
| command                 | function | null    | Callback to execute when item is clicked.                |
| disabled                | boolean  | false   | When set as true, disables the menuitem.                 |
| expanded                | boolean  | false   | Visibility of submenu.                                   |
| hidden                  | boolean  | false   | When set as true, do not display the menuitem.           |
| id                      | string   | null    | Identifier of the element.                               |
| items                   | array    | null    | An array of children menuitems.                          |
| label                   | string   | null    | Label of the item                                        |
| queryParams             | object   | null    | Query parameters for internal navigation via routerLink. |
| routerLink              | array    | null    | RouterLink definition for internal navigation.           |
| routerLinkActiveOptions | object   | null    | Configuration for active router link.                    |
| style                   | string   | null    | Inline style of the menuitem.                            |
| styleClass              | string   | null    | Style class of the menuitem.                             |
| target                  | string   | null    | Specifies where to open the linked document/url.         |
| title                   | string   | null    | Tooltip text of the item.                                |
| url                     | string   | null    | External link to navigate when item is clicked.          |



If you put this component inside a container, it will take 100% width of the container.  
If you want to have a side menu like in this showcase, it is probably better to place it inside a **sidebar** component (from SBNG library).

```html
<sb-sidebar fixed="true">
    <sb-sidebar-menu>
        <sb-menu [model]="menuModel"></sb-menu>
    </sb-sidebar-menu>
</sb-sidebar>

```

<br>
<br>

#### Translation on the menu if you are using Transloco

As the menu is generated as a static model you will have to refresh it each time the language change.  
To do that, subscribe to the translocoService and put it around the menu model:

```javascript
ngOnInit() {

    this.translocoService.selectTranslate().subscribe(() => {
        this.menuModel = [
        {
            label: 'Home',
            routerLink: ['/app/firstpage'],
        },
        {
            label: this.translocoService.translate('menu.client_list'),
            routerLink: ['/app/client-list'],
        }
        ];
    });
}
```

Please note that this is also mandatory even if you don't change the language dynamically on your application.  
Indeed, there is a high chance that the translations files will not be loaded when the menu will create. So subscribe to translocoService to avoid that.

#### Dynamic menu

Sometime, you need to bind some of the values of the menu to dynamic variable. For example you want to enable an item only after the user has done an action. 
To do that, we are providing a service that you can call to refresh the menu when you want:
(Do not forget to provide the service in your sbng.module.ts, it is not injected in the root)

```javascript
import { UpdateMenuService } from '@sb/components';

constructor(private readonly updateMenuService: UpdateMenuService) { }

ngOnInit() {
    this.updateMenuService.menuUpdated.subscribe(() => {
        this.menuModel = [
            {
                label: 'Components',
                disabled: someService.isdisabled,
            }
        ]
    });

    this.updateMenuService.menuUpdated.next(true);
}
```

`An other component`
```javascript
import { UpdateMenuService } from '@sb/components';

constructor(private readonly updateMenuService: UpdateMenuService) { }

doAnAction() {
    someService.isdisabled = false;
    this.updateMenuService.menuUpdated.next(true);
}
```
