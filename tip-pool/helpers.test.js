describe('helpers.js submitPaymentInfo function', () => {
    
    it('should calculate sum by type in object', () => {
        //intit
        let type ='billAmt';
        billAmt.value = 20;
        tipAmt.value = 4;
        submitPaymentInfo();
        result = sumPaymentTotal(type);

        expect(result).toEqual(20);
    });
    afterEach(function() {
        billAmt.value = "";
        tipAmt.value = "";
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentId = 0;
        }); 
    });

describe('helpers.js calculateTipPercent function', () => {

it('should calculate the tip percentage of the transaction', () => {
    //init
    billAmt.value = 20;
    tipAmt.value = 4;
    billAmt = billAmt.value;
    tipAmt = tipAmt.value;
    let result = calculateTipPercent(billAmt, tipAmt);
    
    expect(result).toEqual(20);

    
    });

    // clean-up
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    }); 
});

