# MapTool Vue Example
This is a simple MapTool add-on that demonstrates the use of Vue.js in 
a HTML5 context. 

The functionality is nothing new, it only serves to illustrate *one* way
of using Vue. I am sure there is a way of using e.g. SFC and build steps
but I haven't delved into that. 

Basically, I just use the Vue 3 options API, which does not require a build
step, and thus is very easy to make work in MapTool. 

## Structure
The structure of the add-on is fairly simple. Of course there is the required
structure for MapTool add-ons. Within that structure I have two `.mts` files, 
a couple of `.js` files and a `.html`. 

```
<Root>
├─ library\
│    ├─ mtscript\
│    │    ├─ events\
│    │    │    onInit.mts
│    │    └─ public\
│    │         EvaluateMacro.mts
│    └─ public\
│         ├─ backend\
│         │    showTokenProperties.js
│         └─ frontend\
│              js\lib\vue.global-3.5.13.js
│              token.html
├ events.json
└ library.json
```

* `onInit.mts`: This sets up the library. Really just a single javascript UDF.
* `EvaluateMacro.mts`: A helper macro used by the html5/javascript context. 
* `showTokenProperties.js`: A javascript UDF for showing the `token.html` in a dialog. 
* `token.html`: The "magic" of Vue inside MapTool. 
* The `vue.global-3.5.13.js` is the Vue library downloaded from a CDN provider, in order to alleviate any issues from accessing the CDN from within MapTool. This *can* supposedly cause problems, so to avoid it, I simply downloaded the library. 

## Setup
In order to use the library, drag it into MapTool and create a macro button somewhere. 
I put it in the GM panel, as the functionality it offers may be game breaking. 

The macro of the button should be: 
```
[h:js.vx.showTokenProperties()]
```

## Usage
The primary purpose of the library is to demonstrate how to use Vue.js
inside a html5 / javascript context in MapTool. 

But beyond that, it actually also do have a bit of functionality. 
It will show *all* properties of a selected token, with the option of
updating the value of or even *reset* [^1] a property. 

![A screenshot of the Token Properties dialog.](/docs/token-properties.webp)

I haven't done anything to spice the visual up in any way. Feel free to appropriate the library and make it your own :wink:


[^1]: [According to the wiki](https://wiki.rptools.info/index.php/resetProperty) `resetProperty` will reset the value of the property to campaign default, *or* delete the property entirely, if it is not a campaign property. 



