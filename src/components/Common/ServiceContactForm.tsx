"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';

const contactSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  companyindustry: z.string().min(3, "Company industry is required"),
});


const ServiceContactForm = () => {
  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      companyindustry: "",
      message: "",
    },
  });
  const onContactSubmit = async (data: z.infer<typeof contactSchema>) => {
    const response = await fetch("/api/hubspot-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Thanks for contacting us!");
      contactForm.reset();
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="p-[1.5px] rounded-lg bg-gradient-to-b from-muted-foreground to-transparent w-full h-fit">
      <Card className="relative rounded-lg overflow-hidden bg-black text-white border-none">
        <CardTitle className="text-3xl text-center max-w-md mx-auto capitalize">How can we help your business?</CardTitle>
        <CardDescription className="text-center text-white mb-2">We&apos;re a message away from bringing your idea to life.</CardDescription>
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(onContactSubmit)}
            className="space-y-4 max-w-xl mx-auto rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="firstname"
                        placeholder="First name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="lastname"
                        placeholder="Last name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={contactForm.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="phonenumber"
                      placeholder="Phone number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />


            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactForm.control}
              name="companyindustry"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="companyindustry"
                      placeholder="Company Industry"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      id="message"
                      placeholder="Project idea..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="gap-2 bg-white px-6 rounded-lg font-semibold text-black capitalize"
            >
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default ServiceContactForm