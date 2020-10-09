import React from "react";
import {Alert, AlertIcon, Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/core";
import {connect} from "react-redux";
import {login} from "../../store/actions/authActions";


class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  inputHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandler(e) {
    e.preventDefault()
    this.props.login(this.state)
  }
  render() {
    return(
      <form style={{width: "100%"}} onSubmit={this.submitHandler}>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="username">Email</FormLabel>
          <Input type="email" id="username" name='username' placeholder='Email' onChange={this.inputHandler}/>
        </FormControl>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="password">Пароль</FormLabel>
          <Input type="password" name='password' id="password" autoComplete='on' placeholder='Пароль' onChange={this.inputHandler}/>
        </FormControl>
        {this.props.errors ?
          <Alert status="error" my={4}>
            <AlertIcon />
            {this.props.errors}
          </Alert>
          : null
        }
        <Flex justifyContent={"center"}>
          <Button type="submit" variantColor={"teal"}>Войти</Button>
        </Flex>
      </form>
    )
  }
}

export default connect(state => state.user,{login})(SignIn)
