import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	const styleSemaforo = {
		width:"200px",
		padding:"20px 0px 20px 0px"
	}
	const stylePalo = {
		width:"15px",
		background:"black",
		height:"100px"
	} 
	const styleCircule = {
		width:"150px",
		height:"150px"
	}
	const styleCirculePurpura = {
		background:"#8361FF",
		width:"150px",
		height:"150px"
	}
	const [color,setColor] = useState(["red","yellow","gray"])
	const [colorBrilla,setColorBrilla] = useState("")

	useEffect(()=> {
		console.log("el color que debe de brillar es" + colorBrilla)
	},[colorBrilla])

	const SeleccionarRandom = ()=> {
		const numRandom = getRandomIntInclusive(0,color.length - 1)
		setColorBrilla(color[numRandom])
	}
	const AgregarPurPura = ()=> {
		setColor([...color,"Purpura"])
	}

	return (
		<div className="text-center container-fluid " >
			<div className="row ">
				<div className="col-1 m-auto d-flex justify-content-center">
					<div className="palo" style={stylePalo}></div>
				</div>
			</div>
			<div className="row">
				<div className="col-2 m-auto bg-dark rounded d-flex flex-column align-items-center justify-content-center" style={styleSemaforo}>
				{
					color.map((color)=> {
						if(color === "Purpura") {
							return <div className="row m-1 ">
							<button onClick={()=> setColorBrilla(color)}  className={`col-12 rounded-circle border-0 opacity-${colorBrilla === color? "100" : "50"}`} style={styleCirculePurpura}></button>
						</div>
						} else {
						return <div className="row m-1 ">
							<button onClick={()=> setColorBrilla(color)}  className={`col-12 rounded-circle bg-${color === "red"? "danger" : color === "yellow" ? "warning" : "success"} border-0 opacity-${colorBrilla === color? "100" : "50"}`} style={styleCircule}></button>
						</div>
						}

					})
				}
				</div>
			</div>
			<div className="row">
				<div className="col m-auto mt-3">
					<button onClick={SeleccionarRandom} className="btn btn-primary mx-2">Alternar Seleccionado</button>
					<button onClick={AgregarPurPura} className="btn btn-primary">Añadir color Extra</button>

				</div>
			</div>
		</div>
	);
};

export default Home;
