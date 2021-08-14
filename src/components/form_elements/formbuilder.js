import Vue from "vue";

import draggable from "vuedraggable"

import SimpleText from "@/components/form_elements/FormElementSimpleText"
import DynamicPageCreator from "@/components/form_elements/FormElementDynamicPageCreator"
import DropdownList from "@/components/form_elements/FormElementDropdownList"
import RadioButton from "@/components/form_elements/FormElementRadioButton"
import Checkbox from "@/components/form_elements/FormElementCheckbox"
import NumberInput from "@/components/form_elements/FormElementNumberInput"
import TimePicker from "@/components/form_elements/FormElementTimePicker"
import DatePicker from "@/components/form_elements/FormElementDatePicker"
import DatetimePicker from "@/components/form_elements/FormElementDatetimePicker"
import InputTable from "@/components/form_elements/FormElementInputTable"
import Rating from "@/components/form_elements/FormElementRating"
import FileUploader from "@/components/form_elements/FormElementFileUploader"
import CameraImage from "@/components/form_elements/FormElementCameraImage"
import Signature from "@/components/form_elements/FormElementSignature"
import TermsConditions from "@/components/form_elements/FormElementTermsConditions"
import GeoLocation from "@/components/form_elements/FormElementGeoLocation"
import TextEditor from "@/components/form_elements/FormElementTextEditor"
import CodeScanner from "@/components/form_elements/FormElementCodeScanner"
import BarcodeScanner from "@/components/form_elements/FormElementBarcodeScanner"
import QRcodeScanner from "@/components/form_elements/FormElementQRcodeScanner"
import Paragraph from "@/components/form_elements/FormElementParagraph"
import Button from "@/components/form_elements/FormElementButton"


import Elements from "@/components/form_elements/Elements"
import Properties from "@/components/form_elements/Properties"
import Theming from "@/components/form_elements/Theming"


export const FormBuilder = new Vue({
    components: { Elements, Properties, Theming, draggable, SimpleText, DynamicPageCreator, Paragraph, NumberInput, DropdownList, RadioButton, Checkbox, TimePicker, DatePicker, DatetimePicker, Rating, Button, TextEditor, InputTable, FileUploader, CameraImage, GeoLocation, TermsConditions, Signature, CodeScanner, BarcodeScanner, QRcodeScanner },
    data() {
        return {
            fields: [{
                    "id": 0,
                    "type": "SimpleText",
                    "name": "Text",
                    "helpBlockText": "This is default help text",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "DynamicPageCreator",
                    "name": "Page Creator",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                    },
                    "linkToPageId": 0,
                    "min": 1,
                    "max": 100,
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "DropdownList",
                    "name": "Dropdown",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": "option1"
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    "options": [
                        "Select Items",
                        "option 1",
                        "option 2"
                    ],
                    // "options": [{
                    //         "optionLabel": "Select Item",
                    //         "optionValue": "",
                    //     },
                    //     {
                    //         "optionLabel": "option 1",
                    //         "optionValue": "value 1",
                    //     },
                    //     {
                    //         "optionLabel": "option 2",
                    //         "optionValue": "value 2",
                    //     },
                    // ],
                    // "linkToField": []                 
                },
                {
                    "id": 0,
                    "type": "RadioButton",
                    "name": "Radio",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
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
                    ],
                    // "linkToField": []                 
                },
                {
                    "id": 0,
                    "type": "Checkbox",
                    "name": "Checkbox",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": [
                            "option1",
                            "option2"
                        ]
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    "options": [
                        "option 1",
                        "option 2"
                    ],
                    // "linkToField": []      
                },
                {
                    "id": 0,
                    "type": "NumberInput",
                    "name": "Number",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": 0
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "min": 1,
                    "max": 100,
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "DatePicker",
                    "name": "Date Picker",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": "7/10/1996"
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "TimePicker",
                    "name": "Time Picker",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": "8:40:23"
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "DatetimePicker",
                    "name": "Date-Time Picker",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": "2019-07-19 8:40:23"
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "InputTable",
                    "name": "Input Table",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "Rating",
                    "name": "Rating",
                    "maxRating": 5,
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "FileUploader",
                    "name": "File Uploader",
                    "buttonLabel": "Upload File",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "CameraImage",
                    "name": "Camera Image",
                    "buttonLabel": "Take Photo",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "Signature",
                    "name": "Signature",
                    "buttonLabel": "Sign Here",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "TermsConditions",
                    "name": "Terms and Conditions",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
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
                    ],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "GeoLocation",
                    "name": "GeoLocation",
                    "buttonLabel": "Get Location",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "CodeScanner",
                    "name": "Barcode Scanner",
                    "buttonLabel": "Scan Barcode",
                    "codeType": "barcode",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "CodeScanner",
                    "name": "QRcode Scanner",
                    "buttonLabel": "Scan QR Code",
                    "codeType": "qrcode",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    // "linkToField": []                    
                },
                {
                    "id": 0,
                    "type": "Paragraph",
                    "name": "Paragraph",
                    "helpBlockText": "",
                    "autoSuggestionURL": "swivelsoftware.com",
                    "isRequired": true,
                    "isReadonly": true,
                    "isHidden": true,
                    "defaultValue": true,
                    "requiredOptions": {
                        "alwaysRequired": true,
                        "conditionalRequired": false,
                    },
                    "readonlyOptions": {
                        "alwaysReadonly": true,
                        "conditionalReadonly": false,
                    },
                    "hiddenOptions": {
                        "alwaysHidden": true,
                        "conditionalHidden": false,
                    },
                    "defaultOptions": {
                        "baseDefaultValue": true,
                        "conditionDefaultValue": false,
                        "value": ""
                    },
                    "regExp": "^[0-9]{1,45}$",
                    "constraint": [],
                    "htmlCode": "",
                    // "linkToField": []                    
                },
            ],

            sortElementOptions: {
                group: { name: "formbuilder", pull: false, put: true },
                sort: true,
                handle: ".form__actionitem--move"
            },

            dropElementOptions: {
                group: { name: "formbuilder", pull: "clone", put: false },
                sort: false,
                ghostClass: "sortable__ghost",
                filter: ".is-disabled"
            }
        }
    },
    methods: {
        deleteElement(index, page) {
            vm.$store.activeForm = [];
            vm.$store.activeTabForFields = "elements";

            //for new Json 26/7/2021
            var pageIndex = vm.$store.pages.indexOf(page);
            console.log(pageIndex);
            this.$delete(vm.$store.pages[pageIndex].content, index);
        },

        cloneElement(index, form, page) {
            var cloned = _.cloneDeep(form); // clone deep lodash
            cloned.id = vm.$store.form.fieldAutoId;

            //for new Json 26/7/2021
            var pageIndex = vm.$store.pages.indexOf(page);
            vm.$store.pages[pageIndex].content.splice(index, 0, cloned);
            vm.$store.form.fieldAutoId++;
        },

        editElementProperties(form) {
            if (vm.$store.activeForm == form) {
                vm.$store.activeForm = [];
                vm.$store.activeTabForFields = "elements";
            } else {
                vm.$store.activeForm = form;
                vm.$store.activeTabForFields = "properties";
            }
        }
    }
});