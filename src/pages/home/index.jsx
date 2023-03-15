
import Cabecario from "../../components/cabecario"
import { Container } from "./styled"
import { Logo } from "../../assets/images"

export default function Home() {
	return (
		<Container style={{backgroundImage: Logo}}>
			<Cabecario />
			<div className="content">
				<h3>A calcuradora que sua aposta necessita</h3>
				<a href="/calculadora" className="btn">Abrir calcuradora</a>
			</div>
		</Container>
	)
}