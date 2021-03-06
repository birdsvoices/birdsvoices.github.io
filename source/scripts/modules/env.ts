"use strict";
import * as mod from '../modules/main.mjs';
/**
 * @description This object contains information about the environment (browser)
 */
export let EnvInfo = {
    os: null,
    browser: {
        string: null,
        name: null,
        supports: {
            java: null,
            wasm: null,
            promise: null,
            CSSsupports: null,
        }
    }
};
export let OS = [
    { name: "windows", regexp: /Win(16|32|64|CE)?/i },
    { name: "macOS", regexp: /Mac(Intel|PPC|68K)?/i },
    { name: "WebTV OS", regexp: /WebTV( OS)?/i },
    { name: "SunOS", regexp: /SunOS/i },
    { name: "HP-UX", regexp: /HP-UX/i },
    { name: "Linux", regexp: /Linux( i686| i386| armv7l)?/i },
    { name: "FreeBSD", regexp: /FreeBSD( i686| i386|*)?/i },
    { name: "NetBSD", regexp: /NetBSD( i686| i386|*)?/i },
    { name: "OpenBSD", regexp: /OpenBSD( i686| i386|*)?/i },
    { name: "ChromeOS", regexp: /ChromeOS/i },
    { name: "Android", regexp: /Android/i },
    { name: "iOS", regexp: /iOS|iPhone OS/i },
    { name: "Xbox OS", regexp: /Xbox( OS)?/i },
    { name: "Xbox 360 OS", regexp: /Xbox 360( OS)?/i },
    { name: "Orbis", regexp: /Orbis( OS)?/i },
]
/**
* @description This object contains User-Agent header for different environments
*/
export let UserAgentHeaders = [
    { name: "Firefox Desktop", array: [] },
    { name: "Firefox Mobile", array: [] },
    { name: "Chrome Desktop", array: [
        /Mozilla\/5.0 \(Windows; U; Windows NT 5.1; en-US\) AppleWebKit\/525.19 \(KHTML, like Gecko\) Chrome\/1.0.154.53 Safari\/525.19/i,
        /Mozilla\/5.0 \(Windows; U; Windows NT 5.1; en-US\) \/AppleWebKit\/525.19 \(KHTML, like Gecko\) Chrome\/1.0.154.36 Safari\/525.19/i,
        /Mozilla\/5.0 \(Windows; U; Windows NT 6.1; en-US\) AppleWebKit\/534.10 \(KHTML, like Gecko\) Chrome\/7.0.540.0 Safari\/534.10/i, // more coming soon...
    ] },
    { name: "Chrome Mobile", array: [] },
    { name: "Opera Desktop", array: [] },
    { name: "Opera Mobile", array: [] },
    { name: "Opera Mini", array: [] },
    { name: "Safari", array: [] },
    { name: "Edge Desktop", array: [] },
    { name: "Edge Mobile", array: [] },
    { name: "Internet Explorer Desktop", array: [] },
    { name: "Maxthon", array: [] },
    { name: "Palemoon Desktop", array: [] },
    { name: "Palemoon Mobile", array: [] },
    { name: "Yandex Browser Desktop", array: [] },
    { name: "Yandex. Browser Mobile", array: [] },
    { name: "Android WebView", array: [] },
    { name: "Blackberry Browser", array: [] },
    { name: "Thunderbird", array: [] },
    { name: "Apple Mail", array: [] },
]
/**
 * @description This class contains methods that can help to collect information about browser (name, version, etc.)
 * 
 * @class
 */
export class Environment extends mod.CreateComponent("Environment", "This class contains methods that can help to collect information about browser.") {
    /**
     * @description Main constructor of the class
     * 
     * @constructor
     * @param {Boolean} log - indicates if the collected information needs to be printed to the console. 
     */
    constructor(log) {
        super();
        console.log(`[${this.gettime()}] Started collecting the information about the environment`);
        for (let i = 0; i < OS.length; i++) {
            if (OS[i].regexp.test(navigator.platform || navigator.userAgent)) {
                EnvInfo.os = OS[i].name;
            } else continue
        }

        if (!EnvInfo.os) {
            console.log(`[${this.gettime()}] Failed to identify the operating system`)
        } else {
            console.log(`[${this.gettime()}] OS identified succesfully: ${EnvInfo.os}`)
        }

        if (navigator.userAgent || navigator.appName) {
            this.writeToObj(browser.string, navigator.userAgent);
            console.log(`[${this.gettime()}] User agent identified succesfully: ${EnvInfo.browser.string}`);
        } else {
            this.writeToObj(browser.string, undefined);
            console.warn(`[${this.gettime()}] Failed to identify user agent header`);
        }

        if ("WebAssembly" in window) {
            this.writeToObj(browser.supports.wasm, true)
            console.log(`[${this.gettime()}] This browser supports WebAssembly.`)
        } else {
            this.writeToObj(browser.supports.wasm, false);
            console.warn(`[${this.gettime()}] This browser does not support WebAssembly.`);
        }

        if (!!navigator.javaEnabled) {
            this.writeToObj(browser.supports.java, true)
            console.log(`[${this.gettime()}] This browser supports Java.`)
        } else {
            this.writeToObj(browser.supports.java, false)
            console.warn(`[${this.gettime()}] This browser does not support Java.`)
        }

        if (window.Promise) {
            this.writeToObj(browser.supports.promise, true)
            console.log(`[${this.gettime()}] This browser supports Promise API`)
        } else {
            this.writeToObj(browser.supports.promise, false)
            console.warn(`[${this.gettime()}] This browser does not support Promise API`)
        }

        if ((window.CSS && window.CSS.supports) || window.supportsCSS) {
            this.writeToObj(browser.supports.CSSsupports, true)
            console.log(`[${this.gettime()}] This browser supports CSS.supports method and @supports at-rule`)
        } else {
            this.writeToObj(browser.supports.CSSsupports, false)
            console.warn(`[${this.gettime()}] This browser does not support CSS.support method and @supports at-rule`)
        }


        if (log === true) {
            console.log(`All information about the environment collected. Now the pbject looks like this:`); this.print()
        }
    }
    /**
     * @description This method returns current time (used in logs)
     * 
     * @returns Current time
     * @static
     * @version 2.0.0
     * @method
     */
    static gettime() {
        let time = new Date(); return time.toLocaleTimeString();
    }
    /**
     * @description This method assigns a value to a property of EnvInfo object
     * 
     * @param {any} property - The property where the value will be assigned
     * @param {any} value - The value which will be assigned to the specified property
     * @static
     * @method
     */
    static writeToObj(property, value) {
        if (!property) return;
        if (!value)    return;
        EnvInfo[property] = value;
    }
    /**
     * @description Prints the EnvInfo object properties to the console
     * 
     * @static
     * @method
     */
    static print() {
        console.log(JSON.stringify(EnvInfo, function replacer(key, value) {
            return (value === undefined) ? null : value;
        }, 4))
    }
}
