"use strict";
/**
 * @description This class contains methods that can help to collect information about browser (name, version, etc.)
 */
export class Environment {
    /**
     * @description Main constructor of the class
     * 
     * @constructor
     * @param {Boolean} log - indicates if the collected information needs to be printed to the console. 
     */
    constructor(log) {
        console.log(`[${this.gettime()}] Started collecting the information about the environment`);
        if (/Win(16|32|64|CE)?/i.test(navigator.platform)) {
            this.writeToObj(os, "Windows");
        } else if (/Mac(Intel|PPC|68K)?/i.test(navigator.platform)) {
            this.writeToObj(os, "macOS")
        } else if (/WebTV( OS)?/i.test(navigator.platform)) {
            this.writeToObj(os, "WebOS")
        } else if (/SunOS/i.test(navigator.platform)) {
            this.writeToObj(os, "SunOS")
        } else if (/HP-UX/i.test(navigator.platform)) {
            this.writeToObj(os, "HP-UX")
        } else if (/Linux( i686| i386| armv7l)?/i.test(navigator.platform)) {
            this.writeToObj(os, "Linux")
        } else if (/FreeBSD( i686| i386|*)?/i.test(navigator.platform)) {
            this.writeToObj(os, "FreeBSD")
        } else if (/NetBSD( i686| i386|*)?/i.test(navigator.platform)) {
            this.writeToObj(os, "NetBSD")
        } else if (/OpenBSD( i686| i386|*)?/i.test(navigator.platform)) {
            this.writeToObj(os, "OpenBSD")
        } else if (/ChromeOS/i.test(navigator.platform)) {
            this.writeToObj(os, "ChromeOS")
        } else if (/Android/i.test(navigator.platform || navigator.userAgent)) {
            this.writeToObj(os, "Android")
        } else if (/iOS|iPhone OS/i.test(navigator.platform || navigator.userAgent)) {
            this.writeToObj(os, "iOS")
        } else if (/Xbox( OS)?/i) {
            this.writeToObj(os, "Xbox OS")
        } else if (/Orbis( OS)?/i) {
            this.writeToObj(os, "Orbis")
        } else {
            this.writeToObj(os, undefined)
        }

        if (!EnvInfo.os) {
            console.log(`[${this.gettime()}] Failed to identify the operating system`)
        } else {
            console.log(`[${this.gettime()}] OS identified succesfully: ${EnvInfo.os}`)
        }

        if (navigator.userAgent || navigator.appName) {
            this.writeToObj(browser.string, navigator.userAgent)
        } else {
            this.writeToObj(browser.string, undefined)
        }

        if (!EnvInfo.browser.string) {
            console.log(`[${this.gettime()}] Failed to identify user agent header`)
        } else {
            console.log(`[${this.gettime()}] User agent identified succesfully: ${EnvInfo.browser.string}`)
        }

        if ("WebAssembly" in window) {
            this.writeToObj(browser.supports.wasm, true)
        } else {
            this.writeToObj(browser.supports.wasm, false)
        }

        if (!EnvInfo.browser.supports.wasm) {
            console.warn(`[${this.gettime()}] This browser does not support WebAssembly.`)
        } else {
            console.log(`[${this.gettime()}] This browser supports WebAssembly.`)
        }

        if (!!navigator.javaEnabled) {
            this.writeToObj(browser.supports.java, true)
        } else {
            this.writeToObj(browser.supports.java, false)
        }

        if (!EnvInfo.browser.supports.java) {
            console.warn(`[${this.gettime()}] This browser does not support Java.`)
        } else {
            console.log(`[${this.gettime()}] This browser supports Java.`)
        }

        if (window.Promise) {
            this.writeToObj(browser.supports.promise, true)
        } else {
            this.writeToObj(browser.supports.promise, false)
        }

        if (!EnvInfo.browser.supports.promise) {
            console.warn(`[${this.gettime()}] This browser does not support Promise API`)
        } else {
            console.log(`[${this.gettime()}] This browser supports Promise API`)
        }

        if ((window.CSS && window.CSS.supports) || window.supportsCSS) {
            this.writeToObj(browser.supports.CSSsupports, true)
        } else {
            this.writeToObj(browser.supports.CSSsupports, false)
        }

        if (!EnvInfo.browser.supports.CSSsupports) {
            console.warn(`[${this.gettime()}] This browser does not support CSS.support method and @supports at-rule`)
        } else {
            console.log(`[${this.gettime()}] This browser supports CSS.supports method and @supports at-rule`)
        }


        if (log === true) {
            console.log(`All information about the environment collected. Now the pbject looks like this:`); this.print()
        }
    }
    /**
     * @description This method returns current time (used in logs)
     * 
     * @returns Current time
     */
    gettime() {
        let time = new Date(); return time.toLocaleTimeString();
    }
    /**
     * @description This method assigns a value to a property of EnvInfo object
     * 
     * @param {any} property - The property where the value will be assigned
     * @param {any} value - The value which will be assigned to the specified property
     */
    writeToObj(property, value) {
        if (!property) return;
        if (!value)    return;
        EnvInfo[property] = value;
    }
    print() {
        console.log(JSON.stringify(EnvInfo, function replacer(key, value) {
            return (value === undefined) ? null : value;
        }, 4))
    }
}
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
