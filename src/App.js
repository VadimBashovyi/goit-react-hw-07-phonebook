import { useSelector } from 'react-redux'
import './App.css'
import Container from './components/Container/Container'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'

export default function App() {
  const filterCon = useSelector((state) => state.contacts.items)

  return (
    <div className="App">
      <Container title="Phonebook">
        <Phonebook />
      </Container>
      <Container title="Contacts">
        {filterCon.length >= 2 && <Filter />}
        <Contacts />
      </Container>
    </div>
  )
}
