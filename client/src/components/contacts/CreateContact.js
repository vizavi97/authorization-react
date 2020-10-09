import React, {useState} from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Box,
  Alert,
  AlertIcon,
  CloseButton
} from "@chakra-ui/core";
import {connect} from "react-redux";
import {createContacts} from "../../store/actions/contactActions";

const CreateContact = (props) => {
  const [field, setField] = useState({
    info: '',
    number: ''
  })
  const [alert, setAlert] = useState(false)
  const inputHandler = event => setField({...field, [event.target.name]: event.target.value})
  const buttonHandler = () => !(field.info.length > 3 && field.number.length > 3)
  const submitHandler = event => {
    event.preventDefault()
    props.createContacts({...field})
    setField({info: '', number: '', success: true})
    setAlert(true)
  }
  return (
    <Box size='lg' margin='auto' h='auto'>
      <Text fontWeight={600} fontSize='1.25rem'>Поля для создания контакта</Text>
      <form onSubmit={submitHandler}>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="info">Контактная информация</FormLabel>
          <Input type="text" id="info" name='info' maxLength={32}  value={field.info} placeholder='Контактная информация' onChange={inputHandler} />
        </FormControl>
        <FormControl my={2} isRequired>
          <FormLabel htmlFor="info">Номер телефона</FormLabel>
          <Input type="text" id="number" name='number' maxLength={20} value={field.number} placeholder='Номер телефона' onChange={inputHandler} />
          <FormHelperText id="email-helper-text">
            {field.error ? 'Введене не вырный номер' : null}
          </FormHelperText>
        </FormControl>
        <Flex justifyContent="flex-end">
          <Button variantColor='green' type="submit" disabled={buttonHandler()}>Создать контакт</Button>
        </Flex>
      </form>
      {alert ?<Alert my={3} status="success" variant="subtle">
          <Flex justifyContent='space-between' alignItems='center' w='100%'>
            <Box>
              <AlertIcon />
              Ваш контакт успешно сохранен
            </Box>
            <CloseButton size="lg" onClick={() => setAlert(false)}/>
          </Flex>
        </Alert> : null}
    </Box>
  )
}

export default connect(null, {createContacts})(CreateContact)
