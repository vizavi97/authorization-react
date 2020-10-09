import React from "react";
import {Flex, Link, Text,Box, Divider} from "@chakra-ui/core";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";


class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'signIn'
    }
  }

  render() {
    return (
      <div className="container">
        <Flex justifyContent="center" flexDirection='column' alignItems='center' w='xl' padding="2rem" borderWidth="1px" rounded="lg" overflow="hidden">
          <Text fontWeight={600} fontSize='1.25rem'>Авторизация</Text>
          <Flex>
              <Link className={this.state.activeTab === 'signIn' ? 'link active-link' : 'link'}
                    onClick={() => this.setState({activeTab: 'signIn'})}>Вход</Link>
            <Divider/>
              <Link className={this.state.activeTab === 'signUp' ? 'link active-link' : 'link'}
                    onClick={() => this.setState({activeTab: 'signUp'})}>Регистрация</Link>
          </Flex>
          <Box width="100%">
            {this.state.activeTab === 'signIn' ? <SignIn /> : ''}
            {this.state.activeTab === 'signUp' ? <SignUp /> : ''}
          </Box>
        </Flex>
      </div>
    )
  }
}

export default Auth
