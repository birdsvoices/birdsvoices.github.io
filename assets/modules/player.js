"use strict";
/**
 * @description This class represents a video or audio player interface.
 */
export class PlayerInterface {
    /**
     * @description Main constructor of the class
     * 
     * @constructor
     * @param {String} type - Represents the type of the player. Possible values are "audio", "video" or "gif" 
     */
    constructor(type) {
        this.type = type;
    }
}
