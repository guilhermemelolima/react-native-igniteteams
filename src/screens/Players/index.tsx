import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";
import { Highlight } from "@components/Highlight";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

type RouteParams = {
	group: string;
}

export function Players(){
	const [team, setTeam] = useState('Time A');
	const [players, setPlayers] = useState([]);

	const route = useRoute();
	const { group } = route.params as RouteParams;

	return(
		<Container>
			<Header showBackButton/>

			<Highlight
				title={group}
				subtitle="Adicione a galera e separe os times"
			/>

			<Form>
				<Input
					placeholder="Nome da pessoa"
					autoCorrect={ false }
				/>

				<ButtonIcon icon="add" />
			</Form>

			<HeaderList>
				<FlatList
					data={["Time A", "Time B"]}
					keyExtractor={item => item}
					renderItem={({ item})=> (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
					horizontal
				/>
				<NumbersOfPlayers>
					{players.length}
				</NumbersOfPlayers>
			</HeaderList>

			<FlatList
				data={players}
				keyExtractor={item => item}
				renderItem={({item}) => (
					<PlayerCard
						name={item}
						onRemove={() => { }}
					/>
				)}
				ListEmptyComponent={() => (
					<ListEmpty message='Não há pessoas nesse time.' />
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[
					{paddingBottom: 100 },
					players.length === 0 && { flex: 1}
				]}
			/>
			<Button
				title="Remover turma"
				type="SECONDARY"
			/>
		</Container>
	)
}
