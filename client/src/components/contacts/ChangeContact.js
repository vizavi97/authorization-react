import React, {useState} from 'react'
import {Button, Flex, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/core";
import {connect} from "react-redux";
import {changeContact} from "../../store/actions/contactActions";


const ChangeContact = (props) => {
  const [field,setField] = useState({
    info: props.info,
    number: props.number,
    id: props.id
  })
  const inputHandler = event => {
    setField({...field, [event.target.name]: event.target.value})
  }
  const buttonHandler = () => !(field.info.length > 3 && field.number.length > 3 && field.info !== props.info || field.number !== props.number)
  const submitHandler = event => {
    event.preventDefault()
    const contact = {
      info: field.info,
      number: field.number
    }
    props.changeContact(props.id,contact)
    props.action()
  }
  return (
  <>
    <form style={{width: "100%", padding: "1rem .5rem"}} onSubmit={submitHandler}>
      <FormControl my={2} isRequired>
        <FormLabel htmlFor="info">Контактная информация</FormLabel>
        <Input type="text"
               id="info"
               name='info'
               value={field.info}
               placeholder='Контактная информация'
               onChange={inputHandler}
        />
      </FormControl>
      <FormControl my={2} isRequired>
        <FormLabel htmlFor="info">Номер телефона</FormLabel>
        <Input type="text"
               id="number"
               name='number'
               value={field.number}
               placeholder='Номер телефона'
               onChange={inputHandler}
        />
        <FormHelperText id="email-helper-text">
          {field.error ? 'Введене не вырный номер' : null}
        </FormHelperText>
      </FormControl>
      <Flex justifyContent="center">
        <Button variantColor='yellow' type="submit" disabled={buttonHandler()}>Изменить контакт</Button>
        <Button
          type='button'
          variantColor='teal' pos='absolute' right={2} bottom={4}
          onClick={props.action}
        >Отменить</Button>
      </Flex>
    </form>
  </>
  )
}

export default connect(null, {changeContact})(ChangeContact)
