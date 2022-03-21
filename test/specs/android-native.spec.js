describe('Android Native Feature Test',()=>{
    it('Access an Activity directly', async () => {
        /// access to activity by package name & activity name
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        /// pause 3s
        await driver.pause(3000);

        /// Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();    
    });
});


