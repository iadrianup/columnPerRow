# ColumnsPerRowJS v1.0.0

## What it is?
ColumnsPerRow JS is a JavaScript plugin that will help you to build equal columns per row at certain breakpoints (xs, sm, md, lg, xl) and it gives you the oportunity to change the number of columns displayed by generating controls of the numbers of columns per row you specify.


### Ideal for
* Products gallery


## Demo
The plugin demo is now using Bootstrap 4 but just for basic styling and show how the plugin works, but it is not required for the plugin to work, you can use this plugin with or without using any framework.

[Click here to go to the Demo](https://iadrianup.github.io/columnsPerRow/ 'ColumnsPerRow JS Demo')


## Install (Dist / Build)
Files are located in assets/ folder but you can also download them from here:
* Development
  * [cpr.min.css](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/css/cpr.min.css)
  * [cpr.js](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/js/cpr.js)
* Production
  * [cpr.min.css](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/css/cpr.min.css)
  * [cpr.min.js](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/js/cpr.min.js) 

I also include source file (SASS) available for download in case you want to work with them.
* SASS (.scss) file
  * [cpr.scss](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/scss/cpr.scss) 
  * [_cpr_core.scss](https://raw.githubusercontent.com/iadrianup/columnsPerRow/master/assets/scss/_cpr_core.scss) 

It is important to mention that when using SASS files it is easier to custom some aspects of the plugin, for example:
* Grid breakpoints (screen size limits)
* Maximun number of columns that can be displayed
* Gutter / gap size between columns


## Initializing / Usage
### Basic
#### HTML
```HTML
    ...
    <!-- .cpr-container must indicate an id -->
    <div class="cpr-container" id="required_id">
        <!-- Use .cpr-column for every item you need -->
        <div class="cpr-column">
            ... The code you want inside a column here ...
        </div>
        ...
    </div>
    ...
```  

#### JavaScript
```javaScript
    new ColumnsPerRow();
```  
---

### Advanced
For advanced usage you must pass an object to the plugin class. Example:
```javaScript
    new ColumnsPerRow({
        yourConfigIndexHere: 'yourConfigValueHere'
    });
```  

Options available in next section.

---

## Options
<!-- Table with thead, tfoot, and tbody -->
<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>container</td>
            <td>
                <b>Default:</b><br>
                '.cpr-container'<br>
                <b>Type:</b><br>
                'String'
            </td>
            <td>The parent container of the columns. In the HTML code it must contain a valid id attribute</td>
        </tr>
        <tr>
            <td>transitions</td>
            <td>
                <b>Default:</b><br>
                false<br>
                <b>Type:</b><br>
                Boolean
            </td>
            <td>Wheter or not showing a transition animation when changing number of columns by clicking in a number in the controls.</td>
        </tr>
        <tr>
            <td>controls</td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.container</td>
            <td>
                <b>Default:</b><br>
                null<br>
                <b>Type:</b><br>
                'String'
            </td>
            <td>The class/id where the controls will be displayed. If defined, you must include a tag with the class/id in your HTML. If not, the controls will be shown right before the item that contains the CPR gallery.</td>
        </tr>
        <tr>
            <td>controls.label</td>
            <td>
                <b>Default:</b><br>
                '# Items:'<br>
                <b>Type:</b><br>
                'String'
            </td>
            <td>The label indicator that appears before the numbers of columns displayed.</td>
        </tr>
        <tr>
            <td>controls.breakpoints</td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>
                controls.breakpoints.xs<br>
                <i>(0px and 576px)</i>
            </td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.breakpoints.xs.opts</td>
            <td>
                <b>Default:</b><br>
                Array [ 1, 2 ]<br>
                <b>Type:</b><br>
                Array [ Number(s) ]
            </td>
            <td>The number of columns that will be shown in the controls.</td>
        </tr>
        <tr>
            <td>controls.breakpoints.xs.default</td>
            <td>
                <b>Default:</b><br>
                1<br>
                <b>Type:</b><br>
                Number
            </td>
            <td>The number of columns that will be shown in the cpr container when the window loads.</td>
        </tr>
        <tr>
            <td>
                controls.breakpoints.sm<br>
                <i>(576px and 768px)</i>
            </td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.breakpoints.sm.opts</td>
            <td>
                <b>Default:</b><br>
                Array [ 1, 2 ]<br>
                <b>Type:</b><br>
                Array [ Number(s) ]
            </td>
            <td>The number of columns that will be shown in the controls.</td>
        </tr>
        <tr>
            <td>controls.breakpoints.sm.default</td>
            <td>
                <b>Default:</b><br>
                2<br>
                <b>Type:</b><br>
                Number
            </td>
            <td>The number of columns that will be shown in the cpr container when the window loads.</td>
        </tr>
        <tr>
            <td>
                controls.breakpoints.md<br>
                <i>(768px and 992px)</i>
            </td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.breakpoints.md.opts</td>
            <td>
                <b>Default:</b><br>
                Array [ 3, 4 ]<br>
                <b>Type:</b><br>
                Array [ Number(s) ]
            </td>
            <td>The number of columns that will be shown in the controls.</td>
        </tr>
        <tr>
            <td>controls.breakpoints.md.default</td>
            <td>
                <b>Default:</b><br>
                3<br>
                <b>Type:</b><br>
                Number
            </td>
            <td>The number of columns that will be shown in the cpr container when the window loads.</td>
        </tr>
        <tr>
            <td>
                controls.breakpoints.lg<br>
                <i>(992px and 1200px)</i>
            </td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.breakpoints.lg.opts</td>
            <td>
                <b>Default:</b><br>
                Array [ 3, 4 ]<br>
                <b>Type:</b><br>
                Array [ Number(s) ]
            </td>
            <td>The number of columns that will be shown in the controls.</td>
        </tr>
        <tr>
            <td>controls.breakpoints.lg.default</td>
            <td>
                <b>Default:</b><br>
                4<br>
                <b>Type:</b><br>
                Number
            </td>
            <td>The number of columns that will be shown in the cpr container when the window loads.</td>
        </tr>
        <tr>
            <td>
                controls.breakpoints.xl<br>
                <i>(> 1200px)</i>
            </td>
            <td>
                <b>Type:</b><br>
                Object { }
            </td>
            <td>Index object that might contain other options described below:</td>
        </tr>
        <tr>
            <td>controls.breakpoints.xl.opts</td>
            <td>
                <b>Default:</b><br>
                Array [ 3, 4, 5 ]<br>
                <b>Type:</b><br>
                Array [ Number(s) ]
            </td>
            <td>The number of columns that will be shown in the controls.</td>
        </tr>
        <tr>
            <td>controls.breakpoints.xl.default</td>
            <td>
                <b>Default:</b><br>
                4<br>
                <b>Type:</b><br>
                Number
            </td>
            <td>The number of columns that will be shown in the cpr container when the window loads.</td>
        </tr>
    </tbody>
</table>

## Changelog
### Version
* 1.0.0
  * Soon...

## Future of the plugin
I have some ideas for getting the plugin further and better by adding some other functionailties that will be helpful to you... wait for it.

