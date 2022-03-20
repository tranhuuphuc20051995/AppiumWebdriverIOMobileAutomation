describe('Android Elements Tests',()=>{
    it('Find element by accessibility Id', async () => {
        // find element by accessibility Id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });
});