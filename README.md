# AppiumWebdriverIOMobileAutomation

1. How to run test?
   We can run test by using this command on terminal: npx wdio

2. How to start appium server?
   We can start appium server by using this command on terminal: appium -p <port>
   Ex: appium -p 4724

3. Config for Android on Appium Inspector:

   {
   "platformName": "Android",
   "appium:platformVersion": "10",
   "appium:deviceName": "Pixel 4 API 29",
   "appium:app": "/Users/phuctranh/Desktop/LearnAppiumForMobileAutomationTest/app/android/ApiDemos-debug.apk",
   "automationName": "UIAutomator2"
   }
