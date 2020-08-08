# Change Log

-   Initial release < 0.0.6
-   0.1.0
    -   clg - "console.log('%c$4${TM_FILENAME} ${5:line:${TM_LINE_NUMBER}} ' Object.keys({$1})[0]+ '$3', 'color: blue', \${1:Object});"
    -   replaced with: console.log('%c${TM_FILENAME} line:${TM_LINE_NUMBER} ${1:object}$2', 'color: #007acc;', \${1:object})
