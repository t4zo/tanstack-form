import React, { useState } from 'react'

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
    const [formData, setFormData] = useState<RegisterFormValues>({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        age: 0,
        birthdate: '',
        isMarried: false,
        nationality: 'brazil',
        password: '',
        confirmPassword: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, type, value } = e.target
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        setFormData(((prev) => ({
            ...prev,
            [name]: newValue
        })))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log(formData)
        alert(JSON.stringify(formData, null, 2))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>

            {/* Username */}
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            {/* First Name */}
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input 
                    type="text"
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>

            {/* Last Name */}
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text"
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            {/* Age */}
            <div>
                <label htmlFor="age">Age:</label>
                <input 
                    type="number"
                    id='age'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>

            {/* Birthdate */}
            <div>
                <label htmlFor="birthdate">Birthdate:</label>
                <input 
                    type="date"
                    id='birthdate'
                    name='birthdate'
                    value={formData.birthdate}
                    onChange={handleChange}
                />
            </div>

            {/* Is Married */}
            <div>
                <label htmlFor="isMarried">Are you married:</label>
                <input 
                    type="checkbox"
                    id='isMarried'
                    name='isMarried'
                    checked={formData.isMarried}
                    onChange={handleChange}
                />
            </div>

            {/* Nationality */}
            <div>
                <label htmlFor="nationality">Nationality:</label>
                <select 
                    id='nationality'
                    name='nationality'
                    value={formData.nationality}
                    onChange={handleChange}
                >
                    <option value='canada'>Canada</option>
                    <option value='us'>US</option>
                    <option value='india'>India</option>
                    <option value='brazil'>Brazil</option>
                </select>
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                    type="password"
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}