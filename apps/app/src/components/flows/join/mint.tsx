import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { SwiperContext } from '@/contexts/swiper';
import { CONTRACT } from '@/contracts/contracts';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import * as z from 'zod';

const FormSchema = z.object({
  nickname: z.string().min(2, {
    message: 'Nickname must be at least 2 characters.',
  }),
  profileImageUri: z.string(),
});

export function Mint() {
  const { address } = useAccount();
  const { swiper } = React.useContext(SwiperContext);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { watch } = form;

  const formData = watch();

  const { config, error } = usePrepareContractWrite({
    ...CONTRACT,
    functionName: 'mintMembership',
    args: [address, formData.nickname, formData.profileImageUri],
    onSuccess() {
      toast({
        description: 'Membership has been minted!',
      });
      swiper?.slideNext();
    },
  });

  const { write, error: writeError } = useContractWrite(config);

  if (error || writeError) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: error?.message || writeError?.message,
    });
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const hash = write?.();
    toast({
      title: 'Your Membership is minting...',
      action: (
        <ToastAction altText="explorer">
          <Link href={hash || ''} target="_blank">
            Have a look
          </Link>
        </ToastAction>
      ),
    });
  }

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

        <Button type="submit" disabled={!write}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
