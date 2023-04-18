import styled from "@emotion/styled";
import { useState } from "react";


var x = "#0d6efd" ; 
const Container = styled("div")(({ theme }) => ({
    padding : "20px",
    width: "80%",
    margin: "20px auto",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(0deg, #44b09e 0%, #e0d2c7 35%)",
}));
const Header = styled("h1")(({ theme }) => ({
    color: x,
    textAlign: "center",
    fontWeight: "bold",
    fontSize : "50px" ,
}));
const CalcContainer = styled("div")(({ theme }) => ({
    width: "50%",
    margin: "20px auto",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexWrap: "wrap",
    padding : "20px",
    justifyContent: "center",
    background: "#e0d2c7",
}));
const Input = styled("input")(({ theme }) => ({
    textAlign:"center" ,
    width: "88%",
    margin: "auto",
    marginTop : "15px" , 
    marginBottom : "15px" , 
    border: '1px solid gray',
    boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.5)',
    border:"none" , 
    padding: 5,
    fontSize: 24,
    '&:focus': {
      outline: 'none',
      boxShadow: '1px 1px 5px 0 #0d6efd',
    },
    color: x,
    borderRadius: "10px",
}));

const Button = styled("div")(({ theme }) => ({
    width : "20%" ,
    margin : "1%" ,
    backgroundColor: x,
    color: "white",
    textAlign: "center",
    padding: "10px",
    fontSize: "20px",
    borderRadius: "10px",
    transition: "background-color 0.2s ease ",
    '&:focus': {
        outline: 'none',
        borderColor: x,
      },
    fontWeight: "bold",
    '&:hover' :{
        cursor : "pointer" ,
        backgroundColor : "#0d6efdd6" ,
    },
    '&.clear':{
        backgroundColor: "#dc3545",
    },
    '&.result':{
        width : "86%" ,
    }
}));


const Calculator = () => {
    const [val, setVal] = useState("");
    const changeValue = (number) =>{
        setVal(val + number)
    } 
    const Result = () =>{
        try{
            setVal(eval(val))
        }
        catch{
            setVal("Error")
        }
        
    } 
    const Clear =  ()=>{
        if (val === "Error") {
            setVal("")
        }
        else {
            try{
                setVal(val.slice(0, -1))
            }
            catch{
                setVal("")
            }
        }
        
    }
  return (
    <>
      <Container>
        <Header>Calculator</Header>
        <CalcContainer>
            <Input value={val}/>
            <Button onClick={()=> changeValue("7")}>7</Button>
            <Button onClick={()=> changeValue("8")}>8</Button>
            <Button onClick={()=> changeValue("9")}>9</Button>
            <Button onClick={()=> Clear()} className="clear">CE</Button>
            <Button onClick={()=> changeValue("4")}>4</Button>
            <Button onClick={()=> changeValue("5")}>5</Button>
            <Button onClick={()=> changeValue("6")}>6</Button>
            <Button onClick={()=> changeValue("*")}>×</Button>
            <Button onClick={()=> changeValue("1")}>1</Button>
            <Button onClick={()=> changeValue("2")}>2</Button>
            <Button onClick={()=> changeValue("3")}>3</Button>
            <Button onClick={()=> changeValue("-")}>-</Button>
            <Button onClick={()=> changeValue("0")}>0</Button>
            <Button onClick={()=> changeValue(".")}>.</Button>
            <Button onClick={()=> changeValue("+")}>+</Button>
            <Button onClick={()=> changeValue("/")}>/</Button>
            <Button onClick={()=>Result()} className = "result">=</Button>
        </CalcContainer>
      </Container>
    </>
  );
};

export default Calculator;
