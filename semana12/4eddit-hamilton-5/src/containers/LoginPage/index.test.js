import { shallow } from 'enzyme'
import React from 'react'
import LoginPage from "./"

describe("LoginPage", () => {
    test.skip("Checando se todos os sub componentes importantes estão presentes", () => {
        
        // Preparação
        const MockgoToSignupScreen = jest.fn()
        const Mocksignin = {email: "test@gmail.com", password: 123456}
        const MockgoToPosts = jest.fn()


        const renderedComponent = shallow(<LoginPage goToSignupScreen={MockgoToSignupScreen} signin={Mocksignin} goToPosts={MockgoToPosts}/>)
        // Execução
        const foundLoginPage = renderedComponent.find(LoginPageItem)

        // Verificação
        expect(foundLoginPage).toHaveLength(1);
        expect(foundLoginPage.props().email).toBe(Mocksignin.email)
        expect(foundLoginPage.props().password).toBe(Mocksignin.password)
    })
})
