// Topic: The different ways of creating Objects in JavaScript

// Literal in JavaScript
    // Most types in JS can be created in three different ways
        // let name1 = "Jack" // String created literally
        // let age1 = 120; //Number created literally
        // let conditionalTest1 = true; // Boolen created literally
        // let listOfItems = [] // Array created literally
        // let person = {} // Object created literally (Object Literals)

// 1. Using Object Literals
        // let person = {} 
        // Object created literally (Object Literals)
        // Objects are created directly
        // No object creational blueprint

        //Example

        let person1 = {
            name : "Jackson",
            age : 35,

            talk:function(){
                console.log(
                    this.name
                );
            }
        }
        person1.talk();

// 2. Using Object Refactory
        // Function that literally creates and returns Object
        // Code reuse.
        // CamelCase naming convention
        // Creates and object with in 
        // Returns the object
        function factoryFunction(/*parameters*/){
            const createdObject = {};
            createdObject.property1 = "value1";
            createdObject.propertyN = "valueN";
            createdObject.method1 = function(){}
            return createdObject;
        }
        // OR
        function factoryFunction(/*parameters*/){
            return {
                property1 = "value1",
                propertyN = "valueN",
                method1 = function(){}
            }
        }

// 3. Using Object Constructor
        function ConstructorName(/* Parameters */) {
            this.property1 = "value1";
            this.propertyN = "valueN";
        }
// 4. Using a Class
        class ClassName{
            constructor(){
                // Variables
                this.variableName1 = "value1";
                this.variableNameN = "valueN";
            }
            // operations
            operationN(){
                // operationN definition
            }
        }
// DRY Principle
// D - Don't
// R - Repeat 
// Y - Yourself


       