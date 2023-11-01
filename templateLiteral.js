//Template_Literals
1.Multiline Strings 
a) console.log("string text line 1\n" + "string text line 2");
b) console.log(`string text line 1
string text line 2`);

2.String interpolation
const a = 20;
const b = 4;
a) console.log("Twentyfour is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
b) console.log(`Twentyfour is ${a + b} andnot ${2 * a + b}.`);

3.Nesting templates
a) let classes = "start screen";
classes += isLargeScreen() ? "" : item.isCollapsed ? " icon-expander" : " icon-collapser";
b) const classes = `start screen ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"}`;
c) const classes = `start screen ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;

4.To escape a backtick
a) `\`` === "`"; // true
5.To use dollar sign 
a) `\${1}` === "${1}"; // true
