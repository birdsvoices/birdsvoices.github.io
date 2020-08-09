"use strict";
/**
 * @description This function is used to create a component.
 * 
 * @function
 * @param name The name of the class
 * @param summary A short description of the class
 * @param args Other properties
 * @version 1.0.0
 */
export function CreateComponent(name, summary, ...args) {
    if ((!name) || (!summary)) return;
    let Component = class {
        constructor() {
            console.info(`A new class has been created: ${this.name}`)
        }
    }
    Component.name = name;
    Component.summary = summary;
    if (args) {
        for (let i = 0; i < args.length; i++) {
            result.other[i] = args[i]
        }
    }
    return Component;
}
export function GetClassInfo(classname) {
    return console.log(JSON.stringify({
        name: classname.name,
        description: classname.description
    }, (key, value) => {
        if (value === undefined) return value = null;
        if (typeof key == "function") return value = "function"; 
    }, 4))
}
