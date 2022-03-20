describe('Android Elements Tests',()=>{
    /// Acessibility ID:
    ///  - Crossplatform compatibility
    ///  - Preferred option
    it('Find element by accessibility Id', async () => {
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
    it.only('Find element by class name/tag name', async () => {
        // find element by class name
        const className = $('android.widget.TextView');

        console.log(await className.getText());

        // Assertion
        await expect(className).toHaveText('API Demos');
    });
});

