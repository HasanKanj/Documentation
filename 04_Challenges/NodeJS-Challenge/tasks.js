
/**
* Starts the application
* This is the function that is run when the app starts
* 
* It prints a welcome line, and then a line with "----",
* then nothing.
* 
* @param {string} name the name of the app
* @returns {void}
*/
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  }
  
  /**
  * Decides what to do depending on the data that was received
  * This function receives the input sent by the user.
  * 
  * For example, if the user entered 
  * ```
  * node tasks.js batata
  * ```
  * 
  * The text received would be "batata"
  * This function then directs to other functions
  * 
  * @param {string} text data typed by the user
  * @returns {void}
  */
  function onDataReceived(text) {
  
    if (text === 'quit\n') {
  quit();
  }
  
  else if (text === 'exit\n' ) {
  exit();
  }
  
  else if (text.substring(0, 5) === "hello") {
  hello(text.replace("\n", "").substring(6));
                             }

  else if(text === 'hello\n'){
  hello();
                             }
  
  else if(text === 'list\n') {
    list();
                             }

  else if(text === 'help\n') {
  help();
                             }
  
  else if (text === "add\n") {
  console.log("Error nothing after add command!");
                             }

else if (text.slice(0,3)=== 'add'){
  add(text.slice(4,text.length).replace('\n',''));
 }
 
 
 else if (text.slice(0,6)=== 'remove'){ //should remove the Lasr element of the list
  remove(text.trim().substring(7))
}

else if (text.slice(0,8)=== 'remove 1'){  //should remove the First element of the list
  remove1(text.trim().substring(9))
}

else if (text.slice(0,8)=== 'remove 2'){ //should remove the Second element of the list
  remove1(text.trim().substring(9))
}

  else {
  unknownCommand(text);
  }
   }
  
  /**
  * prints "unknown command"
  * This function is supposed to run when all other commands have failed
  *
  * @param {string} c the text received
  * @returns {void}
  */
  function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
  }
  
  /**
  * Says hello
  *
  * @returns {void}
  */
  function hello(x){
  console.log('hello!' + x + '!')
  }
  
  /**
  * Exits the application
  *
  * @returns {void}
  */
  function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
  }
  
  function exit(){
  console.log('Exitting now, goodbye!')
  process.exit();
  }
  
  function help(){
  console.log('\nType `hello to greet our app \n' + 'Type `quit to exit our app \n' + 'Type `exit to exit our app \n')
  } 

  function add(x) {
    lists.push(x);
  }

  function remove(){
    lists.splice(-1,1);
  }

  function remove1(){
    lists.splice(0,1);
  }

  function remove2(){
    lists.splice(1,1);
  }

  let lists = ['Merry christmas', 'Happy place', 'Happy new year'];

 /*
     Lists all the tasks inside lists
 */
  function list(){
    for (let i  =0; i < lists.length; i++){
      console.log(i + '.' +lists[i])
    }
  }
  // The following line starts the application
  startApp("Hasan Kanj")
  
  