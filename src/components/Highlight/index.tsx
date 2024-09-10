import { Container, Tittle, SubTittle } from "./styles";

type Props = {
	title: string;
	subtitle: string;
};

export function Highlight({ title, subtitle}: Props) {
	return(
        <Container>
            <Tittle>{title}</Tittle>
            <SubTittle>{subtitle}</SubTittle>
        </Container>
    )
}
