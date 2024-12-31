// import React, { useState } from 'react';
// import { Send } from 'lucide-react';
// import { Button } from './Button';

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application, you would handle the form submission here
//     window.location.href = `mailto:karanvir011998@gmail.com?subject=Enquiry Contact: ${formData.name}&body=${formData.message}`;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           required
//           className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           required
//           rows={4}
//           className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </div>
//       <Button type="submit" className="w-full">
//         <Send className="w-4 h-4" />
//         Send Message
//       </Button>
//     </form>
//   );
// }

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send } from 'lucide-react';
import { Button } from './Button';

// Validation Schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long'),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    window.location.href = `mailto:karanvir011998@gmail.com?subject=Enquiry Contact: ${data.name}&body=${data.message}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          } rounded-lg focus:ring-2 ${
            errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          } focus:border-transparent`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } rounded-lg focus:ring-2 ${
            errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          } focus:border-transparent`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          } rounded-lg focus:ring-2 ${
            errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          } focus:border-transparent`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full">
        <Send className="w-4 h-4" />
        Send Message
      </Button>
    </form>
  );
}
