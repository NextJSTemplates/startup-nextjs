"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const staggerWords = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const wordFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const contactSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  companyindustry: z.string().min(3, "Company industry is required"),
});

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  keywords?: string[];
  services?: {
    label: string;
    icon: React.ReactNode;
  }[];
};

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  keywords,
  services,
}: HeroProps) => {

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
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[160px] pb-24 md:pt-[160px] md:pb-[32px] lg:h-screen xl:pt-[160px] xl:pb-[60px] 2xl:pt-[180px] 2xl:pb-[80px]"
    >
      <Image
        src={backgroundImage}
        alt="Tech Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mx-auto max-w-[900px] text-white"
            >
              {keywords && keywords.length > 0 && (
                <motion.div
                  variants={staggerWords}
                  initial="hidden"
                  whileInView="visible"
                  className="mb-6 flex gap-3 text-[13.5px] font-bold tracking-widest uppercase"
                >
                  {keywords.map((word, idx) => (
                    <motion.span key={idx} variants={wordFadeUp}>
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8 w-full max-w-sm text-[13px] sm:text-[15px] md:max-w-md lg:max-w-xl"
              >
                {subtitle}
              </motion.p>
              <div className="mb-8">
                {services?.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="mb-2 flex items-start justify-start gap-2 text-sm"
                    >
                      {item.icon}
                      <p className="mt-1 font-medium">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.6,
                    },
                  },
                }}
                className="flex flex-wrap gap-4"
              >
              </motion.div>
            </motion.div>
          </div>
          <div>
            <Card className="relative overflow-hidden bg-black text-white border border-border/30">
              <CardTitle className="text-3xl text-center max-w-md mx-auto capitalize mb-2">How can we help your business?</CardTitle>
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
        </div>
      </div>
    </section>
  );
};
