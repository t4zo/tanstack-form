import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

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

const registerSchema = z
    .object({
        username: z.string().min(1, 'Username is required'),
        email: z.string().email('Please enter a valid email'),
        firstName: z.string().min(1, 'First Name is required'),
        lastName: z.string().min(1, 'Last Name is required'),
        age: z.number().min(18, 'Please be over 18'),
        birthdate: z.string().nonempty('Birthdate is required'),
        isMarried: z.boolean(),
        nationality: z.enum(['canada', 'us', 'india', 'brazil'], {
            errorMap: () => ({ message: 'Please select a nationality' })
        }),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

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
        validators: {
            onChange: registerSchema
        },
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

            <form.Field name='username'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='email'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='firstName'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='lastName'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='age'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='birthdate'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
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

            <form.Field name='nationality'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='password'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name='confirmPassword'>
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
                            <em>{field.state.meta.errors.map(e => e?.message).join(', ')}</em>
                        )}
                    </div>
                )}
            </form.Field>

            <button type='submit'>Submit</button>
        </form>
    )
}