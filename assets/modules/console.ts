"use strict";

class Console {
    public static Print(...args: any): void {
        console.log(args.join(' '));
    }
}