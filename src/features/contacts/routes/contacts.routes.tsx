import { ContactsPaths } from './contacts.paths.ts'
import Contacts from '../pages'

export const contactsRoutes = [
    {
        path: ContactsPaths.contacts,
        element: <Contacts />
    }
]
