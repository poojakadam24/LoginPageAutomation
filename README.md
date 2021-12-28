# Prerequisites to setup Cypress:
* Windows 8 and above
* Node.js (10 and above) should be installed.
* Any IDE should be available (I am using Visual Studio code)

# Steps to setup Cypress:
* Create new folder for Cypress project through Visual Studio Code.
* Goto your folder in Visual Studio Code (Initially folder will be empty)
* Open VS Code Terminal & run command `npm init -y` (It will create dependency management file package.json in above folder)
* Command to install Cypress : `npm install cypress` (It will downlod and install cypress in the project folder. This step can be done earlier)

# Steps to run tests:
* Test script file should be created in `integration` folder under `cypress folder`. (This folder structure will be available in project section)
* Command to open Cypress : `npx cypress open` (GUI for cypress will be displayed)
* Test Result and time taken to complete tests will be displayed on cypress GUI.

# Test script location:
* Cypress -> Integration -> LoginPageRegressionCases.js
