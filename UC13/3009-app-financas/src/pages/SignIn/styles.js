import styled from "styled-components/native";

export const SignStyles = {
	Background: styled.View`
    flex: 1;
    background-color: #F0F4FF;
  `,

	Container: styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,

	Logo: styled.Image`
    margin-bottom: 25px;
  `,

	AreaInput: styled.View`
    flex-direction: row;
  `,

	Input: styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
  `,

	SubmitButton: styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  `,

	SubmitText: styled.Text`
    font-size: 20px;
    color: #FFF;
  `,

	Link: styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
  `,

	LinkText: styled.Text`
    color: #171717;
  `,
};
