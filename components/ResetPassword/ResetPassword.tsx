'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { PasswordInput } from "@/components/log-in/password-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { resetPasswordSchema } from "@/lib/auth-schema";
import plane from '@/public/Icons/black Plane.svg';
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

function ResetPasswordComponent({form, onSubmit}: {form: UseFormReturn<z.infer<typeof resetPasswordSchema>>, onSubmit: (values: z.infer<typeof resetPasswordSchema>) => Promise<void>}) {
  return (
    
    <Card className="w-full my-auto border-none shadow-none py-0 md:flex-none md:w-[370px] md:p-0 md:mx-auto md:border-none md:shadow-none lg:w-[450px] xl:w-[550px] 2xl:w-[650px]">
    <CardHeader className="pt-3 gap-8">
        <div className="flex items-center gap-0 mx-auto">
            <Image
                src={plane}
                alt="plane image"
                className="w-11 h-auto rotate-0 "
            />
            <div className="font-extrabold text-2xl text-[#060A87]">
                Dire <span className="text-red-600 ml-[-4px]">Express</span>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <CardTitle className="font-bold text-2xl text-[#060A87] text-center md:text-4xl">Update your password</CardTitle>
            <CardDescription className="font-normal text-sm text-[#1A1C1E] text-center md:text-lg">
                Set your new password with minimum 8 characters with a combination of letters and numbers
            </CardDescription>
        </div>

    </CardHeader>

    <CardContent className="pb-3 md:pt-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 md:gap-6">
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="space-y-0 flex-1 md:space-y-2">
                                <FormLabel className="font-medium text-base text-[#060A87] md:text-lg">New Password <span className="text-[#E03137]">*</span></FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="new password" className="h-10 focus:outline-none focus:border-none focus-visible:ring-[#060A87]text-sm md:h-12 md:text-base placeholder-[#A0AEC0]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="space-y-0 flex-1 md:text-lg md:space-y-2">
                                <FormLabel className="font-medium text-base text-[#060A87]">Confirm Password <span className="text-[#E03137]">*</span></FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="re-type your new password" className="h-10 focus:outline-none focus:border-none focus-visible:ring-[#060A87]text-sm placeholder-[#A0AEC0] md:h-12 md:text-base" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>



                <Button className="w-full h-12 mt-6 md:mt-9 md:h-14" type="submit" variant="login">Submit</Button>
            </form>
        </Form>
    </CardContent>
</Card>

  )
}

export default ResetPasswordComponent