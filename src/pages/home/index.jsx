
import Cabecario from "../../components/cabecario"
import { Container } from "./styled"
import { Logo } from "../../assets/images"

export default function Home() {
	return (
		<Container style={{backgroundImage: Logo}}>
			<Cabecario />
			<div className="content">
				<h3>A calcuradora que sua aposta necessita</h3>
				<button href="" className="btn">Abrir calcuradora</button>
			</div>
		</Container>
	)
}