import { Component, OnInit, Input, EventEmitter,ElementRef } from '@angular/core';

// import Promise from 'bluebird';
// import cmd from '../node-modules/node-cmd';

@Component({
  selector: 'app-execute-on-cmd',
  templateUrl: './execute-on-cmd.component.html',
  styleUrls: ['./execute-on-cmd.component.scss']
})

export class ExecuteOnCmdComponent implements OnInit {
  constructor(private elementRef:ElementRef) {}
  ngOnInit() {
    //  var require: any;
    //  const cmd=require('node-cmd');
    // var Promise = require("bluebird");
//     const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });
//   getAsync('node -v').then(data => {
//   console.log('cmd data', data)
// }).catch(err => {
//   console.log('cmd err', err)
// });
// cmd.get(
//   `
//       git clone https://github.com/RIAEvangelist/node-cmd.git
//       cd node-cmd
//       ls
//   `,
//   function(err, data, stderr){
//       if (!err) {
//          console.log('the node-cmd cloned dir contains these files :\n\n',data)
//       } else {
//          console.log('error', err)
//       }

//   }
// );
//   }

// async function main() {
//   try {
//     const passwdContent = await execute("node -v");

//     console.log(passwdContent);
//   } catch (error) {
//     console.error(error.toString());
//   }
// }

// main();

}}


