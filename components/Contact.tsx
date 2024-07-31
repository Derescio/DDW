'use client'
import { useState , useRef} from "react";
import { FaInstagram } from 'react-icons/fa'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendEmail } from "@/app/actionsFolder/EmailAction";
import { useToast } from "@/components/ui/use-toast"
import BackGroundComponent from "./BackGroundComponent";



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
       
        <section id='contact'>
             <BackGroundComponent>
             <h1 className=" text-purple-500 shadow-purple-600 dark:shadow-purple-600 tracking-wide shadow-md rounded-xl dark:shadow-md p-4 text-4xl font-bold text-center mt-10 sm:mt-20 dark:text-purple z-10">CONTACT</h1>
        <div className="mb-12">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                </div>
            )}
            <div className="mt-6">
                <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl dark:bg-black  shadow-purple-600 shadow-sm rounded-md font-[sans-serif]">
                    <div>
                        <h1 className="dark:text-gray-400 text-black text-3xl font-extrabold ">Damion WIlson</h1>
                        <p className="text-sm dark:text-gray-400 text-black mt-4">Thank you for visiting my portfolio! Whether you're interested in discussing a project, have questions about my work, or are looking for a dedicated professional to join your team, I'd love to hear from you. With a passion for web development and a commitment to excellence, I'm always eager to connect with others in the industry. Please feel free to reach out through the form below, and I'll get back to you as soon as possible. Let's create something amazing together!</p>

                        <div className="mt-12">
                            <h2 className="dark:text-gray-400 text-black text-base font-bold">Socials</h2>
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
                        <input type='text' name='name' placeholder='Name' required className="w-full dark:text-gray-200 text-black rounded-lg py-2.5 px-4 border focus:outline text-sm outline-gray-300 mb-[0.25rem]" />
                        <input type='email' name='email' placeholder='Email' required className="w-full dark:text-gray-200 text-black rounded-lg py-2.5 px-4 border focus:outline text-sm outline-gray-300 mb-[0.25rem]" />
                        <input type='tel' name='phone' placeholder='Phone' className="w-full dark:text-gray-200 text-black rounded-lg py-2.5 px-4 border focus:outline text-sm outline-gray-300 mb-[0.25rem]" />
                        <input type='text' name='subject' placeholder='Subject' required className="w-full dark:text-gray-200 text-black rounded-lg py-2.5 px-4 border focus:outline text-sm outline-gray-300 mb-[0.25rem]" />
                        <textarea name='message' placeholder='Message' rows={6} required className="w-full dark:text-gray-200 text-black rounded-lg py-2.5 px-4 border focus:outline text-sm outline-gray-300 mb-[0.5rem]"></textarea>
                        <button type='submit' className="text-white dark:bg-gray-800 bg-black hover:bg-[#d27bfa] rounded-xl text-sm px-4 py-3 w-full !mt-6">Send</button>
                    </form>
                </div>
            </div>
        </div>
        </BackGroundComponent>
        </section>
        
    )
}

export default Contact
