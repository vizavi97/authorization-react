import React, {useState} from 'react'
import {Divider, ListItem, Text, Flex, CloseButton, Link, Icon} from "@chakra-ui/core";
import {deleteContact} from "../../store/actions/contactActions";
import {connect} from "react-redux";
import ChangeContact from "./ChangeContact";


const Contact = (props) => {
  const [change,setChange] = useState(false)
  const deleteHandler = () => {
    props.deleteContact(props.id)
  }
  const changeStateHandler = () => {
    setChange(false)
  }
  if(change) {
    return (
      <ListItem>
        <Flex justifyContent="space-between" alignItems="center" pos={'relative'}>
          <ChangeContact info={props.info} number={props.number} id={props.id} action={changeStateHandler}/>
        </Flex>
        <Divider/>
      </ListItem>
    )
  }
  return (
    <ListItem>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection='column'>
          <Flex>
            <Text pr={2} fontWeight='600'>{props.index + 1})</Text>
            <Text>Информация о пользователе:</Text>
            <Text pl={2} fontWeight='600'>{props.info}</Text>
          </Flex>
          <Flex>
            <Text>Номер телефона:</Text>
            <Text pl={2} fontWeight='600'>{props.number}</Text>
          </Flex>
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Link onClick={deleteHandler}>
            <CloseButton color='red.600'/>
          </Link>
          <Link onClick={() => setChange(true)}>
            <Icon name='edit'/>
          </Link>
        </Flex>
      </Flex>
      <Divider/>
    </ListItem>
  )
}

export default connect(null,{deleteContact})(Contact)
