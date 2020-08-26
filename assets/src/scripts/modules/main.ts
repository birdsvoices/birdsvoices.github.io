/**
 * @summary There are functions to manage components
 * @description In this module there are functions to create and manage different components. GitHub [link]{@link https://github.com/birdsvoices/birdsvoices.github.io/blob/master/assets/modules/main.mjs}
 * 
 * @module main 
 */
"use strict";

interface IComponent {
    title: String;
    summary: String;
    isVirtual: Boolean;
    elem?: ICustomObject;
}
interface ICustomObject {
    name: String;
    on: ICustomObjectHandlers;
}
interface ICustomObjectHandlers {
    connect: Function;
    disconnect?: Function;
}

/**
 * @summary Component creator
 * @description This function is used to create a component.
 * 
 * @function
 * @param {String} name The name of the class
 * @param {String} summary A short description of the class
 * @param {Boolean} virtuality Indicates whether the component is displayed on the page
 */
export function CreateComponent(name: String, summary: String, virtuality: Boolean, compObj: ICustomObject) {
    /**
     * The component to be returned.
     * @class
     */
    let Component = class Component implements IComponent {
        constructor() {
            console.info(`A new class has been created: ${this.title}`)
            if (this.isVirtual === false) {
                this.elem = class Elem extends HTMLElement {
                    constructor() {
                        super()
                    }
                    connectedCallback() {
                        this.attachShadow({mode: "open"});
                        compObj.on.connect();
                    }
                    disconnectedCallback() {
                        compObj.on.disconnect();
                    }
                }
                customElements.define(compObj.name.toString(), this.elem)
            }
        }
        title: String = name;
        summary: String = summary;
        isVirtual: Boolean = virtuality;
        elem: any;
    }
    return Component;
}
/**
 * @summary Get info about a class
 * 
 * @function
 * @param {String} classname The class to get properties from
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
 */
