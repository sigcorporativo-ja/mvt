# ionic-vanillajs
Make easy use Ionic with VanillaJS thanks to this template and native web components

#### :warning: Under construction :warning:

## Getting Started

**Prerequisites**
* Node & npm: https://nodejs.org/en/download/
  - Version node: 10.20.1
  - Version npm: 6.14.13 
* Ionic CLI:
  - Version Ionic CLI: 6.16.3

  ```javascript
  npm i -g ionic
  ```
    
To build app packages, see the Ionic official doc:
* Android Setup: https://ionicframework.com/docs/developing/android

Set environment variables:
* export ANDROID_SDK_ROOT=/home/user/Android/Sdk/
* export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

Accept SDK licenses:
* yes | /home/user/Android/Sdk/tools/bin/sdkmanager --licenses

Java8 in the system path:
* export JAVA_HOME= /home/user/jvm/jdk1.8.0_231/
* export PATH=${PATH}:$JAVA_HOME

Install Gradle and add it to the path:
* export PATH=${PATH}:/home/user/gradle-6.7/bin

## Developing app
```javascript
  ionic serve
```

## Apk generation

* Cordova in "global" mode:

  ```javascript
  npm i -g cordova
  ```
* Platform:

  ```javascript
  cordova platform add android --save
  ```
  
* Generate file: app-mapea-templates/platforms/android/app/build/outputs/apk/debug/app-debug.apk

  ```javascript
  ionic cordova build android
  ```
 

## ¡ IMPORTANT !
Components than have a map, can't use shadowDOM because the Mapea import is global and will not have access to component DOM
 
