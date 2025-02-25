'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

type FormData = z.infer<typeof schema>;

type CreateUserFormProps = {
  onClose: () => void;
};

export const CreateUserForm = ({ onClose }: CreateUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold">Create User</h2>

      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          {...register('username')}
          placeholder="Enter your username"
          className={`mt-1 block w-full border rounded-md p-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          {...register('email')}
          placeholder="Enter your email"
          className={`mt-1 block w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Create User
      </button>
    </form>
  );
};
