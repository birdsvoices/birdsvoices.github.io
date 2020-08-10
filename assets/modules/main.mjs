/**
 * @summary There are functions to manage components
 * @description In this module there are functions to create and manage different components. GitHub [link]{@link https://github.com/birdsvoices/birdsvoices.github.io/blob/master/assets/modules/main.mjs}
 * 
 * @version 2.0.0
 * @module main 
 */
"use strict";

/**
 * @summary Component creator
 * @description This function is used to create a component.
 * 
 * @function
 * @param {String} name The name of the class
 * @param {String} summary A short description of the class
 * @param {Boolean} virtuality Indicates whether the component is displayed on the page
 * 
 * @version 2.0.0
 */
export function CreateComponent(name, summary, virtuality, compObj) {
    if ((!name) || (!summary) || (!virtuality)) return;
    if (typeof virtuality != "boolean") return;
    if (!virtuality && !compObj) return;
    if (!virtuality && typeof compObj != 'object') return; // compObj propert must be created with "new CustomElemObject(...)"
    let Component = class {
        constructor() {
            console.info(`A new class has been created: ${this.name}`)
        }
        static get name() {
            return name;
        }
        static get summary() {
            return summary;
        }
        static get virtuality() {
            return virtuality;
        }
    }
    if (Component.isVirtual === false) {
        Component.elem = class Elem extends HTMLElement {
            constructor() {
                super()
            }
            connectedCallback() {
                compObj.on.connect()
            }
            disconnectedCallback() {
                compObj.on.disconnect()
            }
        }
    }
    return Component;
}
/**
 * @summary Get info about a class
 * 
 * @function
 * @param {String} classname The class to get properties from
 * @version 2.0.0
 */
export function GetClassInfo(classname) {
    return console.log(JSON.stringify({
        name: classname.name,
        description: classname.description,
        isVirtual: classname.isVirtual,
    }, (key, value) => {
        if (value === undefined) return value = null;
        if (typeof key == "function") return value = "function"; 
    }, 4))
}
/**
 * @summary Binds all the methods of a certain object to its context
 * 
 * @function
 * @param {Object} obj Defines the object
 * @version 2.0.0
 */
export function bindAll(obj) {
    (Object.entries(obj)).forEach((item, index) => {
        if (typeof item[1] == 'function') {
            obj[index] = obj[index].bind(obj);
        }
    });
}
/**
 * @summary This function is invoked to create custom elements for components
 * 
 * @constructor
 * @param {String} name The name of the custom element
 * @param {Function} disconnectHandler This function is called when the element is deleted
 * @param {Function} connectHandler This function is called then the element is created
 * @version 2.0.0
 */
export function CustomElemObject(name, disconnectHandler, connectHandler) {
    if (typeof (disconnectHandler && connectHandler) != 'function') return;
    if (!/\p{Ll}+-\p{Ll}/u.test(name)) return;
    this.name = name;
    this.on.connect = connectHandler;
    this.on.disconnect = disconnectHandler;
}
