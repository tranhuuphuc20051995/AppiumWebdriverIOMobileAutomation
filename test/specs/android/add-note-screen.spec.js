const AddNoteScreen = require('../../screenobjects/android/add-note-screen');

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        /// Deny button: resource-id or id = com.android.packageinstaller:id/permission_deny_button
        /// Allow button: resource-id or id = com.android.packageinstaller:id/permission_allow_button
        /// Click Allow Button of Permission Popup
        await AddNoteScreen.permisionAllowButton.click();
        /// Click Skip Button
        await AddNoteScreen.skipButton.click();
        await expect(AddNoteScreen.addNote).toBeDisplayed();
    });

    it('Add a note, save changes & verify note', async ()=>{
        await AddNoteScreen.addNote.click();
        await AddNoteScreen.text.click();
        await expect(AddNoteScreen.editing).toBeDisplayed();

        /// Add note title
        await AddNoteScreen.editTitle.addValue('Fav Anime List');
        /// Add note body
        await AddNoteScreen.editNote.addValue('Naruto\nOnePiece\nJAVA');

        /// Save changes
        await AddNoteScreen.saveNote();

        /// Assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText('Naruto\nOnePiece\nJAVA');
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
