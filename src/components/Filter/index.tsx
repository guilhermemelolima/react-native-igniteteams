import { TouchableOpacityProps } from "react-native";

import { Contaienr, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
	title: string;
}

export function Filter({title, isActive = false, ...rest}: Props){
	return (
		<Contaienr {...rest} isActive={isActive}>
			<Title>
				{title}
			</Title>
		</Contaienr>
	)
}
