# AppiumWebdriverIOMobileAutomation

1. How to run test? (Run Test)
   We can run test by using this command on terminal: npx wdio

2. How to start appium server? (Run before use Appium Inspector connect to appium server)
   We can start appium server by using this command on terminal: appium -p <port>
   Ex: appium -p 4724

3. Config for Android on Appium Inspector:

   {
   "platformName": "Android",
   "appium:platformVersion": "6.0",
   "appium:deviceName": "Pixel XL API 23",
   "appium:app": "/Users/phuctranh/Desktop/LearnAppiumForMobileAutomationTest/app/android/ApiDemos-debug.apk",
   "automationName": "UIAutomator2"
   }
4. Config for iOS on Appium Inspector:
   
   {
   "platformName": "ios",
   "appium:platformVersion": "14.4",
   "appium:automationName": "XCUITest",
   "appium:app": "/Users/phuctranh/Desktop/LearnAppiumForMobileAutomationTest/app/ios/UIKitCatalog.app.zip",
   "appium:deviceName": "iPhone 12"
   }