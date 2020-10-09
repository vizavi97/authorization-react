import React from "react";
import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/core";
import {connect} from "react-redux";
import {register} from "../../store/actions/authActions";


class SignUp extends React.Component {
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
    this.props.register(this.state)
  }
  render() {
    return(
      <form onSubmit={this.submitHandler} style={{width: "100%"}}>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="username">Email</FormLabel>
          <Input type="email" minLength={4} id="username" name='username' placeholder='Email'  onChange={this.inputHandler}/>
        </FormControl>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="register_password">Пароль</FormLabel>
          <Input type="password" minLength={4} name='password' id="register_password" autoComplete='on' placeholder="Пароль" onChange={this.inputHandler}/>
        </FormControl>
        <Flex justifyContent={"center"}>
          <Button type="submit" variantColor={"teal"}>Зарегистрироваться </Button>
        </Flex>
      </form>
    )
  }
}

export default connect(null,{register})(SignUp)
