
import Cabecario from "../../components/cabecario"
import { Container } from "./styled"
import { Bola } from "../../assets/images"

export default function Home() {
	return (
		<Container style={{ backgroundImage: Bola }}>
			<Cabecario />
			<div className="home" >

				<div className="content">
					<h3>A calcuradora que sua Aposta necessita</h3>
					<a href="/Calculadora" className="btn">Abrir Calcuradora</a>
				</div>

			</div>
		</Container>
	)
}