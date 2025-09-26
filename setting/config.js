/*
Copyright RilzX7 
© 2025 ( RX7 )
Tele : t.me/Rilyzyishere


don't delete Credits!

Copyright #RilzX7 ( 2025 )
*/
const fs = require('fs')
// RilzX7 \\
global.owner = ['628888'] 
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
