import Image from "next/image";

import styles from './contact.module.scss';

const Contact = () => {
    return (
        <section className={` py-[80px]`} id="contact">
            <div className="custom-container">
                <div className="flex items-center">
                    <div className="info">
                        <div className="sc-title flex items-end mb-[20px]">
                            <div className="color-primary-500 font-bold text-[24px]">04.</div>
                            <div className="line color-primary-500 font-bold text-[24px]"></div>
                            <div className="color-primary-500 font-bold text-[24px]">Contact</div>
                        </div>

                        <h2 className='source-serif-pro font-semibold color-primary-800 text-[40px] leading-[100%] mb-[64px]'>Interested in working with me or have any questions?</h2>

                        <h3 className="text-[28px] font-semibold color-primary-800 mb-[8px]">Feel free to reach out</h3>

                        <div className="text-[18px] color-primary-400 mb-[24px]">I&#x27;m always excited to collaborate on new and innovative projects, don&#x27;t hesitate to get in touch!</div>

                        <div className="flex gap-2 justify-start">
                            <a href='mailto:abhishek9898@gmail.com'>
                                <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                    <Image src='/gmail.svg' alt='' width={40} height={40} />
                                </div>
                            </a>

                            <a href='https://www.linkedin.com/in/abhishek-shakya-42528624a/'>
                                <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                    <Image src='/linkedin.svg' alt='' width={40} height={40} />
                                </div>
                            </a>

                            <a href='https://github.com/abhishek98s'>
                                <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                    <Image src='/github.svg' alt='' width={40} height={40} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.contact_bg} hidden lg:block`}>
                        <Image className="relative z-20" src="/contact.svg" alt="contact.png" width={268} height={268} />
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Contact;
