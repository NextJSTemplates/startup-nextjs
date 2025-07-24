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
import { useLanguage } from "@/components/Header";

const ContactForm = () => {
  const { t } = useLanguage();

  const contactSchema = z.object({
    name: z.string().min(1, t("nameRequired")),
    company: z.string().min(1, t("companyRequired")),
    email: z.string().email(t("invalidEmail")),
    phone: z.string().min(1, t("phoneRequired")),
    budget: z.string().optional(),
    message: z.string().min(10, t("describeNeeds")),
    file: z
      .instanceof(File)
      .optional()
      .or(z.undefined()), 
  });

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
        toast.success(t("thanksForContact"));
        form.reset();
      } else {
        const errorText = await res.text();
        console.error("Submission error:", errorText);
        toast.error(t("somethingWentWrong"));
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(t("networkError"));
    }
  };

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-2">{t("howCanWeHelp")}</h1>
      <p className="text-sm mb-6">{t("messageAwayText")}</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("namePlaceholder")} {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
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
                    <Input placeholder={t("companyPlaceholder")} {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
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
                    <Input placeholder={t("corporateEmailPlaceholder")} type="email" {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
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
                      placeholder={t("phonePlaceholder")} 
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
                      <SelectValue placeholder={t("projectBudgetPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under_10k">{t("budgetUnder10k")}</SelectItem>
                      <SelectItem value="10k_50k">{t("budget10k50k")}</SelectItem>
                      <SelectItem value="50k_100k">{t("budget50k100k")}</SelectItem>
                      <SelectItem value="above_100k">{t("budgetAbove100k")}</SelectItem>
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
                  <Textarea placeholder={t("describeNeedsPlaceholder")} {...field} className="shadow-none border-b border-b-muted-foreground rounded-none" />
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
              {t("privacyConsentText")}
            </p>
            <Button type="submit" className="bg-primary hover:bg-primary/80 cursor-pointer text-white w-fit px-6">
              {t("sendButton")}
            </Button>
          </div>
        </form>
      </Form>

      <p className="mt-4 text-sm">
        {t("alternativeContactText")} <a href="mailto:info@classyendeavors.com" className="text-primary font-medium">info@classyendeavors.com</a>
      </p>
    </div>
  );
};

export default ContactForm;