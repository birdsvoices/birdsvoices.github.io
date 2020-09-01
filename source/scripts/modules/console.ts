"use strict";

class Console {
    public static Print(...args: any): void {
        console.log(args.join(' '));
    }
    public static PrintError(...args: any): void {
        console.error(args.join(' '));
    }
    public static PrintWarn(...args: any): void {
        console.warn(args.join(' '));
    }
    public static PrintInfo(...args: any): void {
        console.info(args.join(' '));
    }
    public static Clear() {
        console.info('Clearing the console...');
        try {
            console.clear();
        } catch (err) {
            if (err.name == ('SyntaxError' || 'TypeError' || 'ReferenceError' || 'Error')) {
                console.error(`An error occured while trying to clear the console!\n${err.name}: ${err.message}\n at ${err.stack}`)
            } else throw err;
        }
    }
}
