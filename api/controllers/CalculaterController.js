//CalculaterController
module.exports = {

    calculate: async function (req,res) {

        calculation = await Calculater.create({
            operation:req.body.operation,
            expression:req.body.expression
        }).fetch();
        // result= await Calculater.findOne(calculation.id);
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
