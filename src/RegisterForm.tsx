import { useForm } from '@tanstack/react-form'

type RegisterFormValues = {
    username: string
    email: string
    firstName: string
    lastName: string
    age: number
    birthdate: string
    isMarried: boolean
    nationality: string
    password: string
    confirmPassword: string
}

export default function RegisterForm() {
    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            age: 0,
            birthdate: '',
            isMarried: false,
            nationality: 'canada',
            password: '',
            confirmPassword: '',
        } as RegisterFormValues,
        onSubmit: ({ value }) => {
            console.log(value)
            alert(JSON.stringify(value, null, 2))
        }
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
        }}>
            <h1>Register</h1>

            <form.Field name='username' validators={{
                onChange: ({ value }) => value.trim() === '' && 'Username is required'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id='username'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='email' validators={{
                onChange: ({ value }) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    return !emailRegex.test(value) && 'Please enter a valid email'
                }
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id='email'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='firstName' validators={{
                onChange: ({ value }) => value.trim() === '' && 'First Name is required'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id='firstName'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='lastName' validators={{
                onChange: ({ value }) => value.trim() === '' && 'Last Name is required'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id='lastName'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='age' validators={{
                onChange: ({ value }) => value < 18 && 'Please be over 18'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id='age'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='birthdate' validators={{
                onChange: ({ value }) => value === '' && 'Birthdate is required'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="birthdate">Birthdate:</label>
                        <input
                            type="date"
                            id='birthdate'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='isMarried'>
                {(field) => (
                    <div>
                        <label htmlFor="isMarried">Are you married:</label>
                        <input
                            type="checkbox"
                            id='isMarried'
                            checked={field.state.value}
                            onChange={(e) => field.handleChange(e.target.checked)}
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name='nationality' validators={{
                onChange: ({ value }) => value === '' && 'Please select a nationality'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="nationality">Nationality:</label>
                        <select
                            id='nationality'
                            name='nationality'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        >
                            <option value='canada'>Canada</option>
                            <option value='us'>US</option>
                            <option value='in'>India</option>
                            <option value='brazil'>Brazil</option>
                        </select>
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='password' validators={{
                onChange: ({ value }) => {
                    return value.trim() === '' 
                        ? 'Password can not be empty' 
                        : value.trim().length < 8 
                        && 'Password more than 8 characters'
                }
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='confirmPassword' validators={{
                onChangeListenTo: ['password'],
                onChange: ({ value, fieldApi }) => value.trim() !== fieldApi.form.getFieldValue('password') && 'Passwords do not match'
            }}>
                {(field) => (
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id='confirmPassword'
                            name='confirmPassword'
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors.length > 0 && (
                            <em>{field.state.meta.errors.join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <button type='submit'>Submit</button>
        </form>
    )
}