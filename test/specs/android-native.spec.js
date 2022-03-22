describe('Android Native Feature Test',()=>{
    it('Access an Activity directly', async () => {
        /// access to activity by package name & activity name
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        /// pause 3s
        await driver.pause(3000);

        /// Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();    
    });

    /// Dialog/Alert - Android
    it.only('Working with Dialog Boxes',async ()=>{
        /// access to activity by package name & activity name
        await driver.startActivity('io.appium.android.apis', '.app.AlertDialogSamples');

        /// click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();    

        /// accept alert dialog
        // await driver.acceptAlert();

        /// dismiss alert dialog
        // await driver.dismissAlert();

        /// get alert text
        console.log(await driver.getAlertText());

        /// click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        /// assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

});


