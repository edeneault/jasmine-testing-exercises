describe('helpers.js unit tests', () => {
    
    
    
    it('should calculate sum by type in object', () => {
        //intit
        let type ='billAmt';
        billAmt.value = 20;
        tipAmt.value = 4;
        submitPaymentInfo();
        result = sumPaymentTotal(type);

        expect(result).toEqual(20);
    });

    it('should calculate the tip percentage of the transaction', () => {
        //init
        billAmt.value = 20;
        tipAmt.value = 4;
        billAmt = billAmt.value;
        tipAmt = tipAmt.value;
        let result = calculateTipPercent(billAmt, tipAmt);
       
        expect(result).toEqual(20);
    })
    //clean-up
    afterEach(function() {
    billAmt.value = "";
    tipAmt.value = "";
    allPayments = {};
    paymentId = 0;
    }); 
});

