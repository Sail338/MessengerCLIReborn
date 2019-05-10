/**
 * Makes calls to apis
 */
const messen = require('messen')
const repl = require('repl')
const realTerm = require('terminal-kit' ).realTerminal ;
function promptCredentials(){
    realTerm("hello").color("red")
}
promptCredentials()