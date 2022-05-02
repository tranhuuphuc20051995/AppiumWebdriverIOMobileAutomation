class AddNoteScreen{
    get permisionAllowButton(){
        return $('//*[@resource-id="com.android.packageinstaller:id/permission_allow_button"]');
    }

    get skipButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNote(){
        return $('//*[@text="Add note"]');
    }

    get text(){
        return $('//*[@text="Text"]');
    }

    get editing(){
        return $('//*[@text="Editing"]');
    }

    get editTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.back();
        await driver.back();
    }
}

module.exports = new AddNoteScreen();