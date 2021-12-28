# Prerequisites to setup cypress:
* Windows 8 and above
* Node.js (10 or 12 and above) should be installed.
* Any IDE should be available (I am using Visual Studio code)

# Steps to Setup Cypress:
* Create new folder folder for Cypress project through Visual Studio Code.
* Goto your folder in Visual Studio Code (Currently folder will be empty)
* Open VS Code Terminal & run command npm init -y (It will create dependency management file package.json in above folder)
* Command to install Cypress : npm install cypress (It will downlod and install cypress in the project folder. This step can be done earlier)

# Steps to run tests:
* Test script file should be created under 'integration' folder of cypress. (This folder structure will be available in project section)
* Command to open Cypress : npx cypress open (GUI for cypress will be displayed)
* Test Result and time taken to complete tests will be displayed on cypress GUI.

# Folder Structure
* Cypress folder Contains regression tests for a login process, which requires a username and password.
