'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userProfileSchema } from '@/schema/userProfileSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from '@/types/user';
import { useNotifications } from '@/hooks/useNotification';

interface EditProfileProps {
  user: User;
}

type UserProfileFormData = {
  name: string;
  email: string;
};

export default function EditProfile({ user }: EditProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { addNotification } = useNotifications();
  const { register, handleSubmit, formState: { errors } } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = async (data: UserProfileFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call to update user profile
      console.log('Updating profile:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addNotification('success', 'Profile updated successfully!');
    } catch (error) {
      addNotification('error', 'Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} className={errors.name ? 'border-red-500' : ''} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
}
