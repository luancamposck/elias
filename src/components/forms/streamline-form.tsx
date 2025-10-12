"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Trash2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  contact_email: z.email("Email inválido"),
  law_number_year: z
    .string()
    .min(1, "Número da Lei/Ano é obrigatório")
    .regex(/^\d+\.?\d*\/\d{4}$/, "Formato inválido. Ex: 9.099/1995"),
  problem_description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres"),
  change_proposal: z
    .string()
    .min(10, "Proposta deve ter pelo menos 10 caracteres"),
  submitter_name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  contact_phone: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

export function StreamlineForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact_email: "",
      law_number_year: "",
      problem_description: "",
      change_proposal: "",
      submitter_name: "",
      contact_phone: ""
    }
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    // Aqui você pode fazer a chamada para sua API
    // Por exemplo: await fetch('/api/desburocratize', { method: 'POST', body: JSON.stringify(values) })
  }

  function onReset() {
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-6 sm:p-8 space-y-6">
        <FormField
          control={form.control}
          name="contact_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">
                Existe alguma LEI FEDERAL atrapalhando? Posso ajudar? *
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seuemail@dominio.com.br"
                  className="bg-white border-orange-500 text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="law_number_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">
                Número da Lei / Ano (Ex: 9.099/1995) *
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex: 9.099/1995"
                  className="bg-white border-orange-500 text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="problem_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">
                Descreva como esta Lei está atrapalhando *
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="bg-white border-orange-500 text-black"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-gray-500">
                Seja o mais específico possível citando o artigo, inciso,
                parágrafo, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="change_proposal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">
                Descreva sobre a alteração proposta *
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="bg-white border-orange-500 text-black"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-gray-500">
                Seja o mais específico possível.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="submitter_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Seu nome *</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="bg-white border-orange-500 text-black"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-500">
                  Sua identidade será preservada.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Seu telefone (opcional)
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    className="bg-white border-orange-500 text-black"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-500">
                  Entraremos em contato apenas em caso de necessidade.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onReset}
            className="w-full border-orange-500 text-orange-500 hover:text-orange-500 font-bold gap-2">
            <Trash2 className="size-4 text-orange-500" />
            Limpar Formulário
          </Button>
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold gap-2">
            <Send className="size-4" />
            Enviar Contribuição
          </Button>
        </div>
      </form>
    </Form>
  )
}
