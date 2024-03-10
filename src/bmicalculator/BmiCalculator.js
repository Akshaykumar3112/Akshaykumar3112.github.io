import React from "react";
import './bmiCalculator.css';
function BmiCalculator(){

    const [height , setHeight] = React.useState("");
    const [weight , setWeight ] = React.useState("");
    const [heightErrorMessage , setHeightErrorMessage] = React.useState("");
    const [weightErrorMessage, setWeightErrorMessage] = React.useState("");
    const [calculatedBMI, setCalculatedBMI] = React.useState("");
    const [bmiRange, setBmiRange] = React.useState("");
    const [rangeColor, setRangeColor] = React.useState("");
    let bmi;

    const calculateBMI = () =>{
        if(height <= 0){
            setHeightErrorMessage("Enter valid Height");
            bmi='';
            setCalculatedBMI(bmi);
            return
        }
        setHeightErrorMessage("");

        if(weight <= 0){
            setWeightErrorMessage("Enter valid Weight");
            bmi='';
            setCalculatedBMI(bmi);
            return
        }
        setWeightErrorMessage("");

        bmi = weight/((height/100)*(height/100));
        setCalculatedBMI(bmi);

        if(bmi < 18.5){
            setRangeColor("orange");
            setBmiRange("Under BMI Range");
        }else if(bmi >= 18.5 && bmi < 24.5){
            setRangeColor("green");
            setBmiRange("Within BMI Range");
        }else if(bmi >= 24.5){
            setRangeColor("red");
            setBmiRange("Over BMI Range");
        }
    }
    
    return(
        <section className="bmi">
            <div className="container">
            <h1>BMI Calculator</h1>
                <div className="card">
                    
                    <label> Enter Hight In CM</label><br/>
                    <input
                        type= "number"
                        min = {0}
                        name = "height"
                        id = "height"
                        value = {height}
                        onChange = { (event) => setHeight(event.target.value) }
                    /><br/>
                    <span style={{color:'red'}}>{heightErrorMessage}</span><br/>
                    <lable>Enter Weight In KG </lable><br/>
                    <input
                        type = "number"
                        min = {0}
                        name = "weight"
                        id = "weight"
                        value = {weight}
                        onChange = { (event) => setWeight(event.target.value) }
                    /><br/>
                    <span style={{color:'red'}}>{weightErrorMessage}</span><br/>
                    <button onClick={ ()=> calculateBMI() }>Calculate</button><br/>
                    { calculatedBMI !== '' && (
                        <> <span id = "bmi">BMI = {calculatedBMI}</span></> 
                    )}<br/>
                    <span style={{color:rangeColor}}>{bmiRange}</span><br/>
                    
                </div>
            </div>
        </section>
    );
}
export default BmiCalculator