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
    it('Working with Dialog Boxes',async ()=>{
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

    /// Vertical Scrolling
    /// Working with elements that aren't displayed within the viewport
    /// Link: https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable
    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();
        /// Scroll to end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollToEnd(1,5)');   
        
        /// Scroll Text Into View
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollTextIntoView("Secure Surfaces")');   
        
        await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();
    });

    /// Horizontal Scrolling
    it('Horizontal scrolling', async () => {
        /// Solution 1.
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollTextIntoView("Views")').click();  
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollTextIntoView("Gallery")').click();  
        // await $('~1. Photos').click();

        /// Solution 2.
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");    

        /// Scroll to end
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()'); 

        await driver.pause(3000);
    });

    /// Exercise Scrolling
    it.only('Exercise Scrolling', async () => {
        /// Access the date picker
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");
        /// Get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        /// Click on change the date button
        await $('~change the date').click();
        /// Scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'); 
        
        /// Select the 10th date
        await $('//*[@text="10"]').click();
        /// Click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();
        /// Verify the updated date
        await driver.pause(2000);
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});


