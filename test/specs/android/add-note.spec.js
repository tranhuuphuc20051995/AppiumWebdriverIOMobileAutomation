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
});
