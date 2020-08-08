/*
 **********************************
 *** FILE: clg.js
 *** Test and Document Snippets
 *** Press F12 then CLICK BOTH, at the bottom, to execute the ts file,
 *** then preview to return to editot
 **********************************
 */

/* These are the shortcuts! take them for a spin 
 * Press F12 to view console
clg
clgg
clgbb
clggb
clghello
clgerr
clgr
clghuh
clgg
clgclbrt
clgc 
*/

const car = {
    model: "ferrari",
    year: "2020",
};

const error = {
    results: false,
};

// clg - Simple Console Log Shorcut for JS Objects - Blue Text"
console.log("%cclg.js line:35 car", "color: #007acc;", car);
// clgg - Simple Console Log Shorcut for JS Objects - Green Text"
console.log("%cclg.js line:37 car", "color: #26bfa5;", car);
// clgbb - Simple Console Log Shorcut for JS Objects - Blue Background"
console.log("%cclg.js line:39 car", "color: white; background-color: #007acc;", car);
// clggb - Simple Console Log Shorcut for JS Objects - Green Background"
console.log("%cclg.js line:41 car", "color: white; background-color: #26bfa5;", car);

// clghello - Need to see it a function is being called? Use this: clghello
console.log("%cHello clg.js line:20 new code", "background: green; color: white; display: block;");
// clgerr - Find errors with style
console.log("%cerror clg.js line:22 here", "color: red; display: block; width: 100%;", error);
// clgr - You need a Rainbow in your code
console.log(
    "%c Alex was Here",
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%",
);
// clghuh - Confused?! so put a this guy in your code.
console.log(
    "%c ",
    "background: no-repeat url(https://i.cloudup.com/Zqeq2GhGjt-3000x3000.jpeg); font-size: 1px; padding: 166.5px 250px; background-size: 500px 333px;",
);
// clgg - Bugs, bugs, bugs and more bugs GIF
console.log(
    "%c ",
    "font-size: 1px; padding: 240px 123.5px; background-size: 247px 480px; background: no-repeat url(https://i2.wp.com/i.giphy.com/media/11ZSwQNWba4YF2/giphy-downsized.gif?w=770&amp;ssl=1);",
);
// clgclbrt - Celebrate! your code works! GIF
console.log(
    "%c ",
    "font-size: 1px; padding: 125px 125px; background-size: 250px 250px; background: no-repeat url(https://i2.wp.com/i.giphy.com/media/12BYUePgtn7sis/giphy-downsized.gif?w=770&amp;ssl=1);",
);
// clgc - Coding GIF
console.log(
    "%c ",
    "font-size: 1px; padding: 215px 385px; background-size: 770px 430px; background: no-repeat url(https://i0.wp.com/i.giphy.com/media/ZVik7pBtu9dNS/giphy-downsized.gif?w=770&amp;ssl=1);",
);
