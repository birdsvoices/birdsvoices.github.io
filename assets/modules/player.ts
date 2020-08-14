"use strict";
import * as mod from "../modules/main.mjs";
/**
 * @description This class represents a video or audio player interface.
 * @class
 */
export class PlayerInterface extends mod.CreateComponent("PlayerInterface", "This class represents a video or audio player interface.", false, new mod.CustomElemObject('custom-player', function() {
    // Code...
}, function() {
    // Code...
})) {
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
