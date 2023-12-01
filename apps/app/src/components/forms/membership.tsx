import { Button } from 'react-day-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const FormSchema = z.object({
  nickname: z.string().min(2, {
    message: 'Nickname must be at least 2 characters.'
  }),
  profileImageUri: z.string()
});

type Props = {
  disabled: boolean;
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
};

export default function MembershipForm({ disabled, onSubmit }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nickname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profileImageUri"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="URI to your profile image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={disabled}>
          Mint
        </Button>
      </form>
    </Form>
  );
}
