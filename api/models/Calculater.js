/**
 * Calculater.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
   
      expression: { type: 'string', required: true },
      operation: { type: 'string', required: true },
      result: { type: 'number' },

    
  },

  // _______ _________ _______ __________________ _______    _______  _______ _________          _______  ______   _______ 
  // (  ____ \\__   __/(  ___  )\__   __/\__   __/(  ____ \  (       )(  ____ \\__   __/|\     /|(  ___  )(  __  \ (  ____ \
  // | (    \/   ) (   | (   ) |   ) (      ) (   | (    \/  | () () || (    \/   ) (   | )   ( || (   ) || (  \  )| (    \/
  // | (_____    | |   | (___) |   | |      | |   | |        | || || || (__       | |   | (___) || |   | || |   ) || (_____ 
  // (_____  )   | |   |  ___  |   | |      | |   | |        | |(_)| ||  __)      | |   |  ___  || |   | || |   | |(_____  )
  //       ) |   | |   | (   ) |   | |      | |   | |        | |   | || (         | |   | (   ) || |   | || |   ) |      ) |
  // /\____) |   | |   | )   ( |   | |   ___) (___| (____/\  | )   ( || (____/\   | |   | )   ( || (___) || (__/  )/\____) |
  // \_______)   )_(   |/     \|   )_(   \_______/(_______/  |/     \|(_______/   )_(   |/     \|(_______)(______/ \_______)
                                                                                                                         

  afterCreate:async function(newRecored,procced){
    switch(newRecored.operation){
      case '=':
      newRecored.result = eval(newRecored.expression);
      break;
      case 'C':
      newRecored.result=0;
    }
    return procced();
  },

};

