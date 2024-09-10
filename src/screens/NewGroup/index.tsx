import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
	const navigation = useNavigation()
	const [group, setGroup] = useState("")

	function handleNewGroup(){
		navigation.navigate("players", { group })
	}

	return (
		<Container>
			<Header showBackButton />

			<Content>
				<Icon/>

				<Highlight
					title="Nova turma"
					subtitle="Crie a turma para adicionar as pessoas"
				/>

				<Input
					placeholder="Nome da turma"
					onChangeText={setGroup}
				/>

				<Button
					title="Criar"
					onPress={handleNewGroup}
				/>
			</Content>
		</Container>
	)
}
