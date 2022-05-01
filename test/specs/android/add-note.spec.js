describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        /// Deny button: resource-id or id = com.android.packageinstaller:id/permission_deny_button
        /// Allow button: resource-id or id = com.android.packageinstaller:id/permission_allow_button
        /// Click Allow Button of Permission Popup
        await $('//*[@resource-id="com.android.packageinstaller:id/permission_allow_button"]').click();
        /// Click Skip Button
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note, save changes & verify note', async ()=>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        /// Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue('Fav Anime List');
        /// Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Naruto\nOnePiece\nJAVA');

        /// Save changes
        await driver.back();
        await driver.back();

        /// Assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Naruto\nOnePiece\nJAVA');
    });

    it('Delete a note & check the note in trash can', async () => {
        await driver.back();

        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        /// Click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        /// Click on more icon
        await $('~More').click();

        /// Click on delete item
        await expect($('//*[@text="Delete"]')).click();

        /// Accept alert
        await driver.acceptAlert();

        /// Click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        /// Click on trash can item
        await expect($('//*[@text="Trash Can"]')).click();

        /// Assertions
        /// Solution 1: getText -> toEqual
        // const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        // await expect(trashCanItem).toEqual(note);


        /// Solution 2: not getText -> toHaveText
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await expect(trashCanItem).toHaveText(note);

    });
});
