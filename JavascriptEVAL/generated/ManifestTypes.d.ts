/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    FormulaProperty: ComponentFramework.PropertyTypes.StringProperty;
    DecimalPlaces: ComponentFramework.PropertyTypes.StringProperty;
    FormulaStyle: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    FormulaProperty?: string;
    DecimalPlaces?: string;
    FormulaStyle?: string;
    FormulaResult?: string;
}
