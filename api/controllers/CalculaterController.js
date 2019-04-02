// ___    __    __    ___  __  __  __      __   ____  ____  ____ 
// / __)  /__\  (  )  / __)(  )(  )(  )    /__\ (_  _)( ___)(  _ \
// ( (__  /(__)\  )(__( (__  )(__)(  )(__  /(__)\  )(   )__)  )   /
// \___)(__)(__)(____)\___)(______)(____)(__)(__)(__) (____)(_)\_)
//  ___  _____  _  _  ____  ____  _____  __    __    ____  ____   
// / __)(  _  )( \( )(_  _)(  _ \(  _  )(  )  (  )  ( ___)(  _ \  
// ( (__  )(_)(  )  (   )(   )   / )(_)(  )(__  )(__  )__)  )   /  
// \___)(_____)(_)\_) (__) (_)\_)(_____)(____)(____)(____)(_)\_)  
module.exports = {
    calculate: async function (req,res) {
        calculation = await Calculater.create({
            operation:req.body.operation,
            expression:req.body.expression
        }).fetch();
        res.status(200);
        return res.json(calculation);
    },
    append: async function (req,res) {
        textBoxValue=req.body.textBoxValue;
        toAppend = req.body.toAppend;
        if(textBoxValue==0 || textBoxValue=='Invalid operation'){//set
            textBoxValue=toAppend;
        }else{//append
            textBoxValue+=toAppend;
        }
        return res.json(textBoxValue);
    }
};
