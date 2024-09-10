import theme from 'src/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.COLORS.GRAY_600};
`
export const LoadingIndictor = styled.ActivityIndicator.attrs(({}) => ({
	color: theme.COLORS.GREEN_700,
	size: 'large'
}))``;
