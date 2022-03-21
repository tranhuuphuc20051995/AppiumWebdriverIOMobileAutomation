describe('Android Elements Tests',()=>{
    ///  Acessibility ID:
    ///  - Crossplatform compatibility
    ///  - Preferred option
    it.skip('Find element by accessibility Id', async () => {
        // find element by accessibility Id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });



    /// Class Name/Tag Name:
    ///  - Not Unique(usually)
    ///  - Ex: TextView, Button, Layout
    /// it.only() is Indicates this test should be executed exclusively. 
    /// - Chỉ chạy 1 mình nó. Không chạy những test khác
    it.skip('Find element by class name/tag name', async () => {
        // find element by class name
        const className = $('android.widget.TextView');

        console.log(await className.getText());

        // Assertion
        await expect(className).toHaveText('API Demos');
    });



    /// XPath:
    ///  - Go to Selector after Acessibility ID
    ///  - Dynamic & Flexibel :heavy_check_mark:
    ///  - Long & Difficult to read :x:
    it.skip('Find element by XPath', async () =>{
        /// Find element by xpath => (//tagname[@attribute=value])
        /// attribute == { content-desc || resource-id || text || ... }
        /// tagname == { android.widget.TextView || android.widget.Button || ... }   

        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        const xPathListDialogWidget = await $('//android.widget.Button[@content-desc="List dialog"]');
        await expect(xPathListDialogWidget).toHaveText('List dialog');
    });



    /// Android UIAutomator:
    ///  - Additional search capabilities
    ///  - Link to ref: 
    ///     https://webdriver.io/docs/selectors/#android-uiautomator
    ///     https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
    ///     https://appium.io/docs/en/writing-running-appium/android/uiautomator-uiselector/
    it.skip('Find element by Android UIAutomator', async () =>{
        /// Find element by Android UIAutomator -> textContains
        await $('android=new UiSelector().textContains("App")').click(); 

    });



    /// Finding Multiple Elements:
    ///  - Use $$ to access multiple elements
    ///  - Example: 
    ///     Loop through elements to get text
    it.skip('Find multiple elements', async () =>{
        const expectedList = [
            'API Demos',
            "Access'ibility",
            'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text',
            'Views'
        ];
        const actualList = [];
        /// Find multiple elements
        const textList = await $$('android.widget.TextView'); 
        /// Loop through them
        for(const element of textList){
            actualList.push(await element.getText());
        }
        /// Assert the list
        await expect(actualList).toEqual(expectedList);
    });    


    it.skip('Working with Text Input Field', async () =>{
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();
        const textInputField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');
        await textInputField.click();
        await textInputField.addValue('Canada');
        await expect(textInputField).toHaveText('Canada');
    });  
});


