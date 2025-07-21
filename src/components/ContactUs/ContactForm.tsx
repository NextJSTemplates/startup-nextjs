"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please describe your needs"),
  file: z
    .instanceof(File)
    .optional()
    .or(z.undefined()), 
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "", 
      budget: "",
      message: "",
      file: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      let fileData = null;
      
      if (data.file instanceof File) {
        const reader = new FileReader();
        fileData = await new Promise((resolve) => {
          reader.onload = () => resolve({
            name: data.file!.name,
            type: data.file!.type,
            size: data.file!.size,
            data: reader.result
          });
          reader.readAsDataURL(data.file);
        });
      }

      const submitData = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message,
        budget: data.budget,
        // file: fileData?.data || null
      };

      const res = await fetch("/api/hubspot-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (res.ok) {
        toast.success("Thanks for contacting us!");
        form.reset();
      } else {
        const errorText = await res.text();
        console.error("Submission error:", errorText);
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-2">How can we help your business?</h1>
      <p className="text-sm mb-6">We&apos;re a message away from bringing your idea to life.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name*" {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Company*" {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Corporate email*" type="email" {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Phone*" 
                      {...field} 
                      className="shadow-none border-b border-b-muted-foreground rounded-none" 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Project budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under_10k">Under $10k</SelectItem>
                      <SelectItem value="10k_50k">$10k - $50k</SelectItem>
                      <SelectItem value="50k_100k">$50k - $100k</SelectItem>
                      <SelectItem value="above_100k">Above $100k</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Describe your needs in detail*" {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="file" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      onChange(file);
                    }} 
                    {...rest} 
                    className="shadow-none border-b border-b-muted-foreground rounded-none" 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              By clicking Send, you consent to Innowise processing your personal data per our Privacy Policy. By submitting your phone number, you agree we may contact you via voice calls, SMS, and messaging apps.
            </p>
            <Button type="submit" className="bg-primary hover:bg-primary/80 cursor-pointer text-white w-fit px-6">
              Send
            </Button>
          </div>
        </form>
      </Form>

      <p className="mt-4 text-sm">
        You can also send us your request to <a href="mailto:info@classyendeavors.com" className="text-primary font-medium">info@classyendeavors.com</a>
      </p>
    </div>
  );
};

export default ContactForm;