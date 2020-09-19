import { fn } from "jquery";

/**
 * Calls a specified function when the document is loaded.
 * 
 * @param func The function to be called when the document is ready.
 */
function ready(func): void {
    if (document.readyState != 'loading') {
        func();
    } else {
        document.addEventListener('DOMContentLoaded', func);
    }
}