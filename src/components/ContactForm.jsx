import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStateMessage('¡Mensaje enviado con éxito!');
          setIsSubmitting(false);
          reset();
          setTimeout(() => { setStateMessage(null); }, 5000);
        },
        (error) => {
          setStateMessage('Algo salió mal, por favor intenta de nuevo.');
          setIsSubmitting(false);
          setTimeout(() => { setStateMessage(null); }, 5000);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            className={`block w-full bg-neutral-900 border rounded-md p-3 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-700 focus:ring-red-700' : 'border-gray-700 focus:ring-red-700'}`}
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Empresa (Opcional)</label>
          <input 
            type="text" 
            id="company" 
            {...register('company')} 
            className="block w-full bg-neutral-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700" 
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className={`block w-full bg-neutral-900 border rounded-md p-3 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-700 focus:ring-red-700' : 'border-gray-700 focus:ring-red-700'}`}
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: { value: /^\S+@\S+$/i, message: 'El formato del email no es válido' },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
        <textarea
          id="message"
          rows="5"
          className={`block w-full bg-neutral-900 border rounded-md p-3 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-700 focus:ring-red-700' : 'border-gray-700 focus:ring-red-700'}`}
          {...register('message', { required: 'El mensaje no puede estar vacío' })}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300 disabled:bg-gray-500 disabled:border-gray-500"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>
      {stateMessage && <p className="text-center text-gray-300 mt-4">{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;