/** 
 * Kendo UI v2018.1.117 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2018 Telerik AD. All rights reserved.                                                                                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["sd"] = {
        name: "sd",
        numberFormat: {
            pattern: ["n-"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n %","% n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "Rs"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["سومر","اڱارو","اربع","خميس","جمعو","ڇنڇر","آچر"],
                    namesAbbr: ["سو","اڱ","ار","خم","جمعو","ڇن","آچ"],
                    namesShort: ["سو","اڱ","ار","خم","جم","ڇن","آچ"]
                },
                months: {
                    names: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر"],
                    namesAbbr: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    F: "dddd, dd MMMM, yyyy h:mm:ss tt",
                    g: "dd/MM/yyyy h:mm tt",
                    G: "dd/MM/yyyy h:mm:ss tt",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));