import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Input from "../common/input/Input";
import Button from "../common/button/Button";
import Loader from "../common/Loader";

import { register } from '../../apis/authAPIs';

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.email || !form.password || !form.name) {
      setError('Please fill all the fields!');
      setLoading(false);
      return;
    }

    const data = await register(form);

    if (!data) {
      toast.error('Something went wrong!');
      setLoading(false);
      setError('');
      return;
    }

    if (!data.success) {
      toast.error(data.message);
      setLoading(false);
      setError('');
      return;
    }

    toast.success(data.message);
    setLoading(false);
    setError('');

    localStorage.setItem('access_token', data.tokens.access);
    localStorage.setItem('refresh_token', data.tokens.refresh);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(data.user));

    navigate('/dashboard');
  };

  return (
    <form>
      <Input
        type={'text'}
        label={'name'}
        icon={'user'}
        value={form.name}
        onChange={handleChange}
      />

      <Input
        type={'email'}
        label={'email'}
        icon={'envelope'}
        value={form.email}
        onChange={handleChange}
      />

      <Input
        type={'password'}
        label={'password'}
        icon={'lock'}
        value={form.password}
        onChange={handleChange}
      />

      <div className="error">
        <p>
          {error}
        </p>
      </div>

      <Button
        title={loading ? <Loader delay={400} show={loading} /> : 'Sign up'}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Register;