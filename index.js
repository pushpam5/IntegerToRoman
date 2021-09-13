const exp = require('express')
const app = exp()
app.use(exp.json());
app.use(exp.urlencoded({
    extended: true
}));


const serverUrl = ''

function integerToRoman(n) {

    if(n < 1){
        return "Please Enter Number Greater Than 0";
    }

    if(n > 100){
        return "Please Enter Number Smaller Than 101"
    }

    var index = 0,romanNumeral = "";

    //Dictionary of Numbers 
    const dictionary =
        [
            { currentIntegerValue: 100, currentRomanValue: 'C' },
            { currentIntegerValue: 90, currentRomanValue: 'XC' },
            { currentIntegerValue: 50, currentRomanValue: 'L' },
            { currentIntegerValue: 40, currentRomanValue: 'XL' },
            { currentIntegerValue: 10, currentRomanValue: 'X' },
            { currentIntegerValue: 9, currentRomanValue: 'IX' },
            { currentIntegerValue: 5, currentRomanValue: 'V' },
            { currentIntegerValue: 4, currentRomanValue: 'IV' },
            { currentIntegerValue: 1, currentRomanValue: 'I' }
        ];        
    // Computation of Roman Numeral    
    while (n) {
        console.log(dictionary[index])
        let { currentIntegerValue, currentRomanValue } = dictionary[index];
        while (n >= currentIntegerValue) { romanNumeral += currentRomanValue; n -= currentIntegerValue }
        index++;
    }
    return romanNumeral;
}

// API to get the Roman Numeral
app.get(`/:number?`, (req, res) => {
    var currentIntegerValue = Number(req.params.number);
    console.log('current integer ', currentIntegerValue);
    res.send(integerToRoman(currentIntegerValue));

}
)

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})
