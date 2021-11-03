import {TextInput} from '../../common'

const ApplicationForm = () =>{

    const onSubmitForm = (event) =>{
        console.log({" event.target.name ": event.target.name.value})
        event.preventDefault()
    }

    return(
        <form onSubmit={onSubmitForm}>
            <TextInput name="name" id="name" label="Name" />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default ApplicationForm