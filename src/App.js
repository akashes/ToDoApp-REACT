import "./App.css";
import { useState } from "react";

import { TextField, Stack, Button, Palette, Experimental_CssVarsProvider } from "@mui/material";
function App() {
	const [interest, setInterest] = useState(0);
	const [principal, setPrincipal] = useState(0);
	const [rate, setRate] = useState(0);
	const [year, setYear] = useState(0);
	const [isValid, setIsValid] = useState(false);
	const [isRateValid, setIsRateValid] = useState(false);
	const [isYearValid, setIsYearValid] = useState(false);
	const handleCalculate = (e) => {
		e.preventDefault();
		if (principal && rate && year) {
			let result = (principal * year * rate) / 100;
			setInterest(result);
		} else {
			alert("please fill the form correctly ");
		}
	};
	const reset = () => {
		setInterest(0);
		setPrincipal(0);
		setRate(0);
		setYear(0);
		setIsValid(false);
		setIsRateValid(false);
		setIsYearValid(false);
	};

	//to validate inputs

	// const principalFunction=(e)=>{
	// 	const {value}=e.target
	// 	console.log(value);
	// 	// if(!!value.match(/^[0-9]+$/)){
	// 	if(!isNaN(value)){
	// 		setPrincipal(value)
	// 		setIsValid(false)

	// 	}else{
	// 		setPrincipal(value)
	// 		setIsValid(true)
	// 	}

	// }
	// const RateFunction=(e)=>{
	// 	const {value}=e.target
	// 	if(!isNaN(value)){
	// 		setRate(value)
	// 		setIsRateValid(false)

	// 	}else{
	// 		setRate(value)
	// 		setIsRateValid(true)

	// 	}

	// }
	// const YearValidate=(e)=>{
	// 	const{value}=e.target
	// 	if(!isNaN(value)){
	// 		setYear(value)
	// 		setIsYearValid(false)
	// 	}else{
	// 		setYear(value)
	// 		setIsYearValid(true)
	// 	}

	// }
	const validateInput = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		if (!isNaN(value)) {
			if (name == "principal") {
				setPrincipal(value);
				setIsValid(false);
			} else if (name == "rate") {
				setRate(value);
				setIsRateValid(false);
			} else if (name == "year") {
				setYear(value);
				setIsYearValid(false);
			}
		} else {
			if (name == "principal") {
				setPrincipal(value);
				setIsValid(true);
			} else if (name == "rate") {
				setRate(value);
				setIsRateValid(true);
			} else if (name == "year") {
				setYear(value);
				setIsYearValid(true);
			}
		}
	};

	return (
		<div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center bg-dark ">
			<div style={{ width: "500px" }} className="bg-light  p-5 rounded">
				<div className="heading">
					<h3>Simple Interest Calculator </h3>
					<p>Calculate your simple interests Easily</p>
				</div>
				<div
					style={{ height: "150px" }}
					className="result-card w-100 rounded d-flex justify-content-center align-items-center shadow flex-column bg-warning"
				>
					<h1>₹ {interest}</h1>
					<p>Total Simple Interest</p>
				</div>

				<form onSubmit={handleCalculate} className="mt-5">
					<div className="mb-3">
						<TextField
							onChange={validateInput}
							name="principal"
							className="w-100"
							id="outlined-basic"
							label="Principle Amount"
							variant="outlined"
							value={principal || " "}
						/>
						{isValid && <div className="text-danger">Invalid Input</div>}
					</div>

					<div className="mb-3">
						<TextField
							onChange={validateInput}
							name="rate"
							className="w-100"
							id="outlined-basic"
							label="Rate of interest (p.a) %"
							variant="outlined"
							value={rate || ""}
						/>
						{isRateValid && <div className="text-danger">Invalid Input</div>}
					</div>

					<div className="mb-3">
						<TextField
							onChange={validateInput}
							name="year"
							className="w-100"
							id="outlined-basic"
							label="Time period (Yr)"
							variant="outlined"
							value={year || ""}
						/>
						{isYearValid && <div className="text-danger">Invalid Input</div>}
					</div>
					<Stack direction="row" spacing={2}>
						<Button
							sx={{ bgcolor: "info.main" }}
							type="submit"
							style={{ width: "200px", height: "70px" }}
							// className="bg-gray"
							variant="contained"
							disabled={isValid ? true : isRateValid ? true : isYearValid ? true : false}
						>
							CALCULATE
						</Button>
						<Button onClick={reset} style={{ width: "200px", height: "70px" }} variant="outlined">
							RESET
						</Button>
					</Stack>
				</form>
			</div>
		</div>
	);
}

export default App;
