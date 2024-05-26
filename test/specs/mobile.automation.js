describe('Open Application',() => {
    it('should open apps', async() => {
        const className = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]')
        const text = className.addValue("Fatkhan Nur Rahman")
        await browser.pause(3000)
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").setValue("85");
        await $("//android.widget.EditText[@text='Height']").setValue("175");
        await browser.pause(3000)
        await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]').click();
        await browser.pause(3000)
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]').click();
        await browser.pause(3000)
        await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_rest"]').click();
        await browser.pause(3000)
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        await browser.pause(3000)
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("Diet Meal App")
    })
})