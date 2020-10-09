import React, {useEffect, useState} from 'react'
import {Box, Divider, Flex, List, InputGroup, Input, Text, InputRightElement, Icon} from "@chakra-ui/core";
import CreateContact from "./CreateContact";
import {connect} from "react-redux";
import {getAllContacts} from "../../store/actions/contactActions";
import Contact from "./Contact";
import {FilteredContact} from "./FilteredContact";

const Contacts = (props) => {
  const contacts = props.contacts.contacts;
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    props.getAllContacts()
  }, [])
  const filterHandler = event => {
    const lowerCase = event.target.value.toLowerCase().trim();
    if (lowerCase !== '') {
      const filter = contacts.filter(item => {
        return Object.keys(item).some(k => item[k].toString().toLowerCase().includes(lowerCase))
      })
      setFilteredArray(filter)
    }
  }
  return (
    <Flex flexDirection={"column"}>
      <Box w="100%" p={4}>
        <CreateContact />
      </Box>
      <Divider />
      {contacts.length > 0
        ? <Flex>
        <Box width={600} p={2} border='1px solid #eee'>
          <List>
            {contacts.map((c, i) => {
              return <Contact key={c.id} id={c.id} index={i} info={c.info} number={c.number} />
            })}
          </List>
        </Box>
        <Divider orientation="vertical" p={4} />
        <Box width={600}>
          <InputGroup>
            <Input variant="flushed" type="phone" placeholder="Поиск..." onChange={filterHandler} />
            <InputRightElement children={<Icon name="search" color="gray.600" />} />
          </InputGroup>
          <List pt={2}>
            {filteredArray.length > 0 ? filteredArray.map(c => {
                return <FilteredContact key={c.id} info={c.info} number={c.number} />
              }) : null}
          </List>
        </Box>
      </Flex>
        : <Text>У Вас нет записанных контактов!</Text> }
    </Flex>
  )
}

export default connect(state => state, {getAllContacts})(Contacts)
