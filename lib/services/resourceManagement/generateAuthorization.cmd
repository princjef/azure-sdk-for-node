::
:: Microsoft Azure SDK for Node - Generate library code
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::

@echo off
set autoRestVersion=0.13.0-Nightly20151210
if  "%1" == "" (
    set specFile="https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/arm-resources/authorization/2015-01-01/swagger/authorization.json"
) else (
    set specFile="%1"
)
set repoRoot=%~dp0..\..\..\
set generateFolder=%~dp0lib\authorization

if exist %generateFolder% rd /S /Q  %generateFolder%
call "%repoRoot%\tools\autorest.gen.cmd" %specFile% Microsoft.Azure.Management.Storage %autoRestVersion% %generateFolder% 