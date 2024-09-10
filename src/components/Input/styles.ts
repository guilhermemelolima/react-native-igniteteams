import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TextInput)`
	${({theme})=> css`
		background-color: ${theme.COLORS.GRAY_700};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.WHITE};
	`}
	flex: 1;
	min-height: 56px;
	max-height: 56px;
	border-radius: 6px;
	padding: 12px;
	margin-bottom: 20px;
`;
