`import { SbPageModule } from '@sb/components'` in app.module

This component is very simple for now. So you can easily fork it or do you own one.  
It only contain one `@Input` that is the label: the title of your page and it is optional.  
The only thing that this component do is to put a bit of margin for your page content (always necessary for a good design).

Here is a sample:

```html
<sb-page label="My title">
    ....
</sb-page>

```
