import React from 'react'
import {Divider, Flex, ListItem, Text} from "@chakra-ui/core";


export const FilteredContact = (props) => {
  return (
  <>
    <ListItem>
      <Flex flexDirection='column'>
          <Flex>
            <Text>Информация о пользователе:</Text>
            <Text pl={2} fontWeight='600'>{props.info}</Text>
          </Flex>
          <Flex>
            <Text>Номер телефона:</Text>
            <Text pl={2} fontWeight='600'>{props.number}</Text>
          </Flex>
      </Flex>
      <Divider/>
    </ListItem>
  </>
  )
}
