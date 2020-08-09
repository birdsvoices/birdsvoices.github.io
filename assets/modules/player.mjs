"use strict";
import * as mod from "../modules/main";
/**
 * @description This class represents a video or audio player interface.
 * @version 2.0.0
 * @class
 */
export class PlayerInterface extends mod.CreateComponent("PlayerInterface", "This class represents a video or audio player interface.") {
    /**
     * @description Main constructor of the class
     * 
     * @constructor
     * @param {String} type - Represents the type of the player. Possible values are "audio", "video" or "gif" 
     * @version 1.0.0
     */
    constructor(type) {
        this.type = type;
    }
}
