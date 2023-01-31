// This Middleware function will be checking if new idea or updated idea is worth more than 1000 000

const checkMillionDollarIdea = (req, res, next) => {

    const { weeklyRevenue, numWeeks} = req.body;

    const moneyEarned = Number(weeklyRevenue) * Number(numWeeks)

    if( !weeklyRevenue || !numWeeks || isNaN(moneyEarned) || moneyEarned < 1000000){
        res.status(400).send();
    }
    else{
        next()
    }

};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
