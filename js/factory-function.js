const say = require("say");
module.exports = function makeChanges(){
    function readTheText(data){
        say.speak(data, 'Good News', 1.0, (err) => {
            if (err) {
              return console.error(err)
            }
           
            console.log('Text has been spoken.')
          });
          
    }
    return{
        readTheText
    }
}