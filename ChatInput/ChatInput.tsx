'use client'

import { useState, useRef } from 'react'
import { toast } from 'sonner'
import { TextArea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { usePlaygroundStore } from '@/store'
import useAIChatStreamHandler from '@/hooks/useAIStreamHandler'
import { useQueryState } from 'nuqs'
import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Loader, Paperclip } from 'lucide-react'
import * as pdfjsLib from 'pdfjs-dist'
// import dynamic from 'next/dynamic'

// const PDFPreview = dynamic(() => import('./PDFPreview'), {
//   ssr: false,
// })

const ChatInput = ({ className }: { className: string }) => {
  const { chatInputRef } = usePlaygroundStore()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { handleStreamResponse } = useAIChatStreamHandler()
  const [selectedAgent] = useQueryState('agent')
  const [inputMessage, setInputMessage] = useState('')
  const isStreaming = usePlaygroundStore((state) => state.isStreaming)
  const [isLoadingFile, setIsLoadingFile] = useState(false)

  const [, setPdfFile] = useState<File | null>(null)
  const [, setNumPages] = useState<number | null>(null)
  const [pdfTextContent, setPdfTextContent] = useState<string>('')

  const handleSubmit = async () => {
    if (!inputMessage.trim()) return

    const currentMessage = inputMessage
    setInputMessage('')

    try {
      await handleStreamResponse(currentMessage)
    } catch (error) {
      toast.error(
        `Error in handleSubmit: ${error instanceof Error ? error.message : String(error)
        }`
      )
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoadingFile(true)

    try {
      if (file.type === 'text/plain') {
        const text = await file.text()
        setInputMessage(text)
      } else if (file.type === 'application/pdf') {
        // Set the PDF file for preview
        setPdfFile(file)

        // Extract text content but don't display it in the preview
        const reader = new FileReader()
        reader.onload = async () => {
          const typedarray = new Uint8Array(reader.result as ArrayBuffer)

          const pdf = await pdfjsLib.getDocument(typedarray).promise
          let textContent = ''

          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum)
            const content = await page.getTextContent()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const strings = content.items.map((item: any) => item.str)
            textContent += strings.join(' ') + '\n'
          }

          // Store the text content separately (for sending to AI)
          setPdfTextContent(textContent)
          // Don't set any message in the input
          chatInputRef.current?.focus()
        }
        reader.readAsArrayBuffer(file)
      } else {
        toast.error('Unsupported file type. Please upload a .txt or .pdf file.')
      }
    } catch (err) {
      console.error('File upload error:', err)
      toast.error('Failed to read file.')
    } finally {
      setIsLoadingFile(false)
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  // const removePdfPreview = () => {
  //   setPdfFile(null)
  //   setNumPages(null)
  //   setPdfTextContent('')
  //   setInputMessage('')
  // }

  const handleSubmitWithPdf = async () => {
    if (!inputMessage.trim() && !pdfTextContent) return

    // If there's PDF content, include it in the message
    const messageToSend = pdfTextContent ?
      `${inputMessage}\n\nPDF Content:\n${pdfTextContent}` :
      inputMessage

    setInputMessage('')
    setPdfTextContent('')
    setPdfFile(null)
    setNumPages(null)

    try {
      await handleStreamResponse(messageToSend)
    } catch (error) {
      toast.error(
        `Error in handleSubmit: ${error instanceof Error ? error.message : String(error)
        }`
      )
    }
  }

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 flex flex-col justify-center px-4 pb-2 bg-background", className)}>
      {/* PDF Preview */}
      {/* {pdfFile && (
        <PDFPreview file={pdfFile} onRemove={removePdfPreview} />
      )} */}

      <div className="flex w-full max-w-3xl items-end justify-center gap-x-2 mx-auto">
        <TextArea
          placeholder={'Ask anything...'}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.nativeEvent.isComposing &&
              !e.shiftKey &&
              !isStreaming
            ) {
              e.preventDefault()
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              pdfTextContent ? handleSubmitWithPdf() : handleSubmit()
            }
          }}
          className="border-border bg-primaryAccent text-primary focus:border-accent w-full border px-4 text-sm"
          disabled={!selectedAgent || isLoadingFile}
          ref={chatInputRef}
        />

        <Input
          ref={fileInputRef}
          id="file-upload"
          type="file"
          accept=".txt,.pdf"
          onChange={handleFileUpload}
          className="hidden"
        />

        <Button
          onClick={handleFileButtonClick}
          disabled={!selectedAgent || isStreaming || isLoadingFile}
          size="icon"
          className="text-primary rounded-xl bg-[#0C555D] hover:bg-[#0C555D] cursor-pointer p-5"
          title="Upload file"
        >
          {isLoadingFile ? (
            <Loader size={14} color="#49EA99" className="animate-spin" />
          ) : (
            <Paperclip color="#49EA99" />
          )}
        </Button>

        <Button
          onClick={pdfTextContent ? handleSubmitWithPdf : handleSubmit}
          disabled={!selectedAgent || (!inputMessage.trim() && !pdfTextContent) || isStreaming || isLoadingFile}
          size="icon"
          className="text-primary rounded-xl bg-[#0C555D] p-5"
        >
          <Icon type="send" color="#49EA99" />
        </Button>
      </div>
    </div>
  )
}

export default ChatInput