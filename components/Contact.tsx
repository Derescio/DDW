'use client'
import { useState , useRef} from "react";
import { FaInstagram } from 'react-icons/fa'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendEmail } from "@/app/actionsFolder/EmailAction";
import { useToast } from "@/components/ui/use-toast"



const Contact = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast()
    const formRef = useRef<HTMLFormElement>(null);
    const sendEmails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })

        try {

            const response = await sendEmail(formData);
            if (response.success) {
                toast({
                    title: "Email Sent Succesfully",
                    description: formattedDate,
                  })
                setTimeout(() => {
                    formRef.current?.reset();
                }, 2000);
            } else {
                toast({
            
                    title: response.message,
                    description: formattedDate,
                  });
            }
        } catch (error) {
            console.error('Error sending emails:', error);
            toast({
                title: "Email Sendinf Failed. Please try again",
                description: formattedDate,
              })
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mb-12">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                </div>
            )}
            <div className="mt-6">
                <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <div>
                        <h1 className="text-gray-800 text-3xl font-extrabold">DDW Web Dev Services</h1>
                        <p className="text-sm text-gray-500 mt-4">Thank you for visiting my portfolio! Whether you're interested in discussing a project, have questions about my work, or are looking for a dedicated professional to join your team, I'd love to hear from you. With a passion for web development and a commitment to excellence, I'm always eager to connect with others in the industry. Please feel free to reach out through the form below, and I'll get back to you as soon as possible. Let's create something amazing together!</p>

                        <div className="mt-12">
                            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                            <ul className="flex mt-4 space-x-4">
                                <Link href="https://www.instagram.com/thetorontosaunaco/">
                                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <FaInstagram />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={sendEmails}>
                        <input type='text' name='name' placeholder='Name' required className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                        <input type='email' name='email' placeholder='Email' required className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                        <input type='tel' name='phone' placeholder='Phone' className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                        <input type='text' name='subject' placeholder='Subject' required className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                        <textarea name='message' placeholder='Message' rows={6} required className="w-full text-gray-800 rounded-lg px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                        <button type='submit' className="text-white bg-black hover:bg-[#f9bd63] rounded-xl text-sm px-4 py-3 w-full !mt-6">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
