export default {
    formJson: {
        "formId": 1,
        "formName": "",
        "format": {}
    },
    form: {
        "id": 1,
        "versionId": "",
        "backgroundImage": "https://cdn.discordapp.com/attachments/838664582385369098/864332471012687922/Swivel.png",
        "color": "#005edb",
        "name": "Test Form",
        "numberOfPage": 1,
        "numberOfDynamicPage": 0,
        "fieldAutoId": 2,
        "pageAutoId": 2,
        "pages": []
    },
    pages: [{
        "id": 1,
        "name": "page 1",
        "isDynamic": false,
        "content": [],
    }, ], //list of single-page forms
    pageAutoId: 2,
    fieldAutoId: 1,
    activeForm: [],
    formMetaData: [],
    selectedFormVersions: [],
    activeTabForFields: "elements",
    themingVars: {
        globalFontFamily: "Arial",
        globalFontColor: "#777777",
        globalLinkColor: "#206C92",
        globalFontSize: "16",

        labelFontWeight: "500",
        labelFontSize: "16",
        labelMarginBottom: "10",

        //helpTextColor: "#cccccc",
        helpTextColor: "#807B7B",
        helpTextFontSize: "12",
        helpTextMarginTop: "10",


        inputBorderRadius: "4",
        inputBorderColor: "#dcdfe6",
        inputHoverBorderColor: "#c0c4cc",
        inputFocusBorderColor: "#000000",
        inputShadowColor: "#9D9D9D",

        buttonBackground: "#000000",
        buttonBorderColor: "#000000",
        buttonColor: "#FFFFFF"
    },
    // for testing
    formToLoad: {
        "formId": 333,
        "formName": "Form333",
        "format": {
            "id": 333,
            "versionId": 1,
            "backgroundImage": "https://cdn.discordapp.com/attachments/838664582385369098/864332471012687922/Swivel.png",
            "name": "Form333",
            "numberOfPage": 3,
            "numberOfDynamicPage": 1,
            "fieldAutoId": 12,
            "pageAutoId": 3,
            "pages": [{
                    "id": 1,
                    "name": "page 1",
                    "isDynamic": false,
                    "content": [{
                            "id": 3,
                            "type": "SimpleText",
                            "name": "Text",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        },
                        {
                            "id": 2,
                            "type": "SimpleText",
                            "name": "Text",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        },
                        {
                            "id": 4,
                            "type": "RadioButton",
                            "name": "Radio",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": "option1"
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": [],
                            "options": [
                                "option 1",
                                "option 2"
                            ]
                        },
                        {
                            "id": 5,
                            "type": "Rating",
                            "name": "Rating",
                            "maxRating": 5,
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": ""
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        },
                        {
                            "id": 6,
                            "type": "Signature",
                            "name": "Signature",
                            "buttonLabel": "Sign Here",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": ""
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        },
                        {
                            "id": 7,
                            "type": "TermsConditions",
                            "name": "Terms and Conditions",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": ""
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": [],
                            "options": [
                                "I agree to terms_&_condition_1",
                                "I agree to terms_&_condition_2"
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "page",
                    "isDynamic": false,
                    "content": [{
                        "id": 8,
                        "type": "DynamicPageCreator",
                        "name": "Page Creator",
                        "autoSuggestionURL": "swivelsoftware.com",
                        "isRequired": true,
                        "isReadonly": true,
                        "isHidden": true,
                        "defaultValue": true,
                        "requiredOptions": {
                            "alwaysRequired": true,
                            "conditionalRequired": false
                        },
                        "readonlyOptions": {
                            "alwaysReadonly": true,
                            "conditionalReadonly": false
                        },
                        "hiddenOptions": {
                            "alwaysHidden": true,
                            "conditionalHidden": false
                        },
                        "defaultOptions": {
                            "baseDefaultValue": true,
                            "conditionDefaultValue": false
                        },
                        "linkToPageId": 3,
                        "min": 1,
                        "max": 100,
                        "regExp": "^[0-9]{1,45}$",
                        "constraint": []
                    }]
                },
                {
                    "id": 3,
                    "name": "page",
                    "isDynamic": true,
                    "content": [{
                            "id": 9,
                            "type": "NumberInput",
                            "name": "Number",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": 0
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "min": 1,
                            "max": 100,
                            "constraint": []
                        },
                        {
                            "id": 10,
                            "type": "FileUploader",
                            "name": "File Uploader",
                            "buttonLabel": "Upload File",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": ""
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        },
                        {
                            "id": 11,
                            "type": "Signature",
                            "name": "Signature",
                            "buttonLabel": "Sign Here",
                            "autoSuggestionURL": "swivelsoftware.com",
                            "isRequired": true,
                            "isReadonly": true,
                            "isHidden": true,
                            "defaultValue": true,
                            "requiredOptions": {
                                "alwaysRequired": true,
                                "conditionalRequired": false
                            },
                            "readonlyOptions": {
                                "alwaysReadonly": true,
                                "conditionalReadonly": false
                            },
                            "hiddenOptions": {
                                "alwaysHidden": true,
                                "conditionalHidden": false
                            },
                            "defaultOptions": {
                                "baseDefaultValue": true,
                                "conditionDefaultValue": false,
                                "value": ""
                            },
                            "regExp": "^[0-9]{1,45}$",
                            "constraint": []
                        }
                    ]
                }
            ]
        }
    }
}