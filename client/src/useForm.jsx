import { useState } from 'react'

const useForm = callback => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })

  handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    callback();
  }

  return (
    handleChange,
    handleSubmit,
    values
  )
}

export default useForm