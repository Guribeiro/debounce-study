import styled, { keyframes, css } from 'styled-components';

export const FormStyled = styled.form`
	margin: 20px 0 30px;
	display: flex;
	flex-direction: column;

	label{
		margin-top: 15px;
		font-size: 16px;
	}

`

export const InfosStyled = styled.section`
	padding-top: 30px;
	margin-top: 15px;
	border-top: 1px solid #eee;

	h2{
		text-align: center;
	}

`

export const AdressStyled = styled.form`
	display: flex;
	flex-direction:column;

	label{
		display: column;
		margin-top: 12px;
	}
`;

const rotate = keyframes`

	from{
		transform: rotate(0deg)
	}
	to{
		transform: rotate(360deg)
	}
`

export const ButtonStyled = styled.button.attrs(props => ({
	type: 'submit',
	disabled: props.load
}))`
		margin-top: 30px;
		display: flex;
		align-items: center;

		justify-content: center;
		font-size: 16px;
		padding: 15px 15px;
		border-radius: 4px;
		color: #fff;
		background: #6159c1;

		&:active{
			transform: translateY(2px);
		}

		&[disabled]{
			opacity: 0.6;
			cursor: not-allowed;
		}

		${props => props.load && css`
			svg{
				animation: ${rotate} 2s linear infinite;
			}
		`}

`;

