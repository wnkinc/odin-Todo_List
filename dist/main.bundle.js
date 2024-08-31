(()=>{"use strict";var n={719:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(354),r=t.n(o),i=t(314),A=t.n(i)()(r());A.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}]);const a=A},365:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(354),r=t.n(o),i=t(314),A=t.n(i)()(r());A.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: #f4f4f4;\n}\n\n.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main projects";\n  grid-template-columns: 300px 1fr 250px;\n  grid-template-rows: auto 1fr;\n  height: 100%;\n  width: 90%;\n  max-width: 1200px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.header {\n  grid-area: header;\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: #eee;\n  padding: 20px;\n  border-right: 1px solid #ccc;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.main {\n  grid-area: main;\n  padding: 20px;\n  overflow-y: auto;\n}\n\n#todoForm,\n#projectForm {\n  display: flex;\n  flex-direction: column;\n}\n\n#notes,\n#pNotes {\n  height: 100px;\n  resize: vertical;\n  /* Allows users to resize the textarea vertically */\n  margin-bottom: 15px;\n}\n\n#todoForm input,\n#projectForm input,\n#todoForm select,\n#projectForm select,\n#todoForm button,\n#projectForm button,\n.addButton,\n.addProject {\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n#todoForm button,\n#projectForm button,\n.addButton,\n.addProject {\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\n#todoForm button:hover,\n#projectForm button:hover,\n.addButton:hover,\n.addProject:hover {\n  background-color: #555;\n}\n\n/* *********************************************************** */\n\n.projectMain {\n  grid-area: projects;\n\n}\n\n.projectList {\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  overflow: auto;   /* Adds a scrollbar if content overflows */\n  height: 40px; /* Set a maximum height to restrict the container size */\n}\n\n.projectList:hover {\n  background-color: #555;\n}\n\n.projectTitle {\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 32px;\n  font-style: italic;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  color: #333;\n  border: none;\n  cursor: pointer;\n  text-align: center;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-right: 20px;\n  width: 230px;\n\n  background-color: #eee;\n  border-radius: 8px; /* Rounded corners */\n  padding: 20px; /* Space inside the container */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), /* Subtle shadow for the lifted effect */\n  0 10px 15px rgba(0, 0, 0, 0.1); /* Additional shadow for depth */\n  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */\n}\n\n.projectButtons {\n  display: flex;\n  flex-direction: column;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb;;2BAEyB;EACzB,sCAAsC;EACtC,4BAA4B;EAC5B,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,sBAAsB;EACtB,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,4BAA4B;EAC5B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,gBAAgB;EAChB,mDAAmD;EACnD,mBAAmB;AACrB;;AAEA;;;;;;;;EAQE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;;;EAIE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA,gEAAgE;;AAEhE;EACE,mBAAmB;;AAErB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,kBAAkB;;EAElB,cAAc,IAAI,0CAA0C;EAC5D,YAAY,EAAE,wDAAwD;AACxE;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;;EAEZ,sBAAsB;EACtB,kBAAkB,EAAE,oBAAoB;EACxC,aAAa,EAAE,+BAA+B;EAC9C;gCAC8B,EAAE,gCAAgC;EAChE,qDAAqD,EAAE,uCAAuC;AAChG;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB",sourcesContent:['* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: #f4f4f4;\n}\n\n.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main projects";\n  grid-template-columns: 300px 1fr 250px;\n  grid-template-rows: auto 1fr;\n  height: 100%;\n  width: 90%;\n  max-width: 1200px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.header {\n  grid-area: header;\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: #eee;\n  padding: 20px;\n  border-right: 1px solid #ccc;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.main {\n  grid-area: main;\n  padding: 20px;\n  overflow-y: auto;\n}\n\n#todoForm,\n#projectForm {\n  display: flex;\n  flex-direction: column;\n}\n\n#notes,\n#pNotes {\n  height: 100px;\n  resize: vertical;\n  /* Allows users to resize the textarea vertically */\n  margin-bottom: 15px;\n}\n\n#todoForm input,\n#projectForm input,\n#todoForm select,\n#projectForm select,\n#todoForm button,\n#projectForm button,\n.addButton,\n.addProject {\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n#todoForm button,\n#projectForm button,\n.addButton,\n.addProject {\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\n#todoForm button:hover,\n#projectForm button:hover,\n.addButton:hover,\n.addProject:hover {\n  background-color: #555;\n}\n\n/* *********************************************************** */\n\n.projectMain {\n  grid-area: projects;\n\n}\n\n.projectList {\n  background-color: #333;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  overflow: auto;   /* Adds a scrollbar if content overflows */\n  height: 40px; /* Set a maximum height to restrict the container size */\n}\n\n.projectList:hover {\n  background-color: #555;\n}\n\n.projectTitle {\n  margin-bottom: 15px;\n  padding: 10px;\n  font-size: 32px;\n  font-style: italic;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  color: #333;\n  border: none;\n  cursor: pointer;\n  text-align: center;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-right: 20px;\n  width: 230px;\n\n  background-color: #eee;\n  border-radius: 8px; /* Rounded corners */\n  padding: 20px; /* Space inside the container */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), /* Subtle shadow for the lifted effect */\n  0 10px 15px rgba(0, 0, 0, 0.1); /* Additional shadow for depth */\n  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */\n}\n\n.projectButtons {\n  display: flex;\n  flex-direction: column;\n}'],sourceRoot:""}]);const a=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(A[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&A[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},A=[],a=0;a<n.length;a++){var s=n[a],d=o.base?s[0]+o.base:s[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var E=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==E)e[E].references++,e[E].updater(p);else{var u=r(p,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:u,references:1})}A.push(l)}return A}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var s=o(n,r),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),A=t.n(i),a=t(659),s=t.n(a),d=t(56),c=t.n(d),l=t(540),E=t.n(l),p=t(113),u=t.n(p),m=t(719),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=A(),h.insertStyleElement=E(),r()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=t(365),b={};function C(n,e,t,o,r,i=[]){this.title=n,this.description=e,this.dueDate=t,this.priority=o,this.notes=r,this.todo=i}function g(n,e,t,o,r,i){this.title=n,this.description=e,this.dueDate=t,this.priority=o,this.notes=r,this.project=i}b.styleTagTransform=u(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=E(),r()(f.A,b),f.A&&f.A.locals&&f.A.locals;let B=[],x=[];!function(){const n=document.getElementById("sidebar");n.appendChild(function(){const n=document.createElement("form");return n.id="todoForm",n.innerHTML='\n        <input type="text" id="title" placeholder="Title" />\n        <input type="text" id="description" placeholder="Description" />\n        <div>Due Date <input type="date" id="dueDate" /></div>\n        <div class="checkbox"><input type="checkbox" id="priority" /> Priority</div>\n        <textarea id="notes" placeholder="Notes"></textarea>\n        <select id="project">\n            <option value="" disabled selected hidden>Select a project</option>\n            <option value="Personal">Personal</option>\n        </select>\n        <button type="submit">Create To-Do</button>\n    ',n}()),n.appendChild(function(){const n=document.createElement("form");return n.id="projectForm",n.innerHTML='\n        <input type="text" id="pTitle" placeholder="Title" />\n        <input type="text" id="pDescription" placeholder="Description" />\n        <div>Due Date <input type="date" id="pDueDate" /></div>\n        <div class="checkbox"><input type="checkbox" id="pPriority" /> Priority</div>\n        <textarea id="pNotes" placeholder="Notes"></textarea>\n        <button type="submit">Create Project</button>\n    ',n}()),document.querySelector("#todoForm").style.display="none",document.querySelector("#projectForm").style.display="none"}(),document.getElementById("todoForm").addEventListener("submit",(function(n){n.preventDefault();const e=new g(...[document.getElementById("title").value,document.getElementById("description").value,document.getElementById("dueDate").value,document.getElementById("priority").checked,document.getElementById("notes").value,document.getElementById("project").value]);document.querySelector("#todoForm").style.display="none",document.querySelector(".addButton").style.display="block",B.push(e),console.log(B),n.target.reset()})),document.getElementById("projectForm").addEventListener("submit",(function(n){n.preventDefault();const e=new C(...[document.getElementById("pTitle").value,document.getElementById("pDescription").value,document.getElementById("pDueDate").value,document.getElementById("pPriority").checked,document.getElementById("pNotes").value,[]]);document.querySelector("#projectForm").style.display="none",document.querySelector(".addProject").style.display="block",x.push(e),console.log(x),function(){const n=document.querySelector("#project");n.textContent="";const e=document.createElement("option");e.value="",e.disabled=!0,e.selected=!0,e.hidden=!0,e.textContent="Select a project",n.appendChild(e),x.forEach((e=>{const t=document.createElement("option");t.value=e.title,t.textContent=e.title,n.appendChild(t)}))}(),function(){const n=document.querySelector(".projectButtons");n.innerHTML="",x.forEach((e=>{const t=document.createElement("button");t.classList.add("projectList"),t.textContent=e.title,n.appendChild(t)}))}(),n.target.reset()})),function(){let n=document.createElement("button");n.classList.add("addButton"),n.textContent="Add To-Do",n.addEventListener("click",(()=>{todoForm.style.display="flex",document.querySelector(".addButton").style.display="none"})),sidebar.insertBefore(n,projectForm);let e=document.createElement("button");e.classList.add("addProject"),e.textContent="Add Project",e.addEventListener("click",(()=>{projectForm.style.display="flex",document.querySelector(".addProject").style.display="none"})),sidebar.appendChild(e)}()})();
//# sourceMappingURL=main.bundle.js.map