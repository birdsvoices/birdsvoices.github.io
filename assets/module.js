"use strict";
/**
 * @description This class contains information about browser (name, version, etc.)
 */
export class Environment {
    /**
     * @description Main constructor of the class
     * 
     * @constructor
     * @param {Boolean} log - indicates if the collected information needs to be printed to the console. 
     */
    constructor(log) {
        console.log(`${this.gettime()} Started collecting the information about the environment`)
    }
    /**
     * @description Get current time (used in logs)
     * 
     * @returns Current time
     */
    gettime() {
        let time = new Date(); return time.toLocaleTimeString();
    }
}
