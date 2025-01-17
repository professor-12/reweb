import React from 'react'
import { Discord, Gmail, LinkedIn, LogoSvg, Twitter, Youtube } from './svgs'

const Footer = () => {

      return (
            <footer className='container pt-12 flex flex-col items-center gap-8 text-white'>
                  <h1 className='text-3xl font-heading text-center text-balance font-medium sm:text-5xl'>Code at the speed of no-code</h1>
                  <p className='text-muted-foreground text-lg max-w-xl text-center'>Build websites at the speed of no-code. Export a Next.js, Tailwind and shadcn/ui app. Customize without limits.</p>
                  <button className="inline-flex group items-center justify-center gap-2 whitespace-nowrap rounded-[calc(1rem-2px)] sm:text-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient))_0%,hsl(var(--primary))_60%)] text-primary-foreground hover:bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient)/0.9)_0%,hsl(var(--primary)/0.9)_60%)] h-14 px-4 sm:px-[40px] py-2 cursor-pointer">
                        <span>Build your site</span>
                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide  lucide-chevron-right transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        >
                              <path d="m9 18 6-6-6-6"></path>
                        </svg>
                  </button>
                  <div className='my-12 flex w-full flex-wrap gap-4 justify-between'>
                        <div className='flex flex-col'>
                              <span className='flex items-center gap-3 mb-3'>
                                    <LogoSvg />
                                    <span className='font-heading text-xl font-semibold'>Reweb</span>
                              </span>
                              <p className='text-muted-foreground '>Code at the speed of no-code.</p>
                              <ul className='flex mt-2 text-muted-foreground items-center gap-6'>
                                    <li>
                                          <a target='_blank' href="https://twitter.com/BadejoEmma56434?t=YMS4ylFRRXrL_HaDuP05yA&s=09">
                                                <Twitter />
                                          </a>
                                    </li>
                                    <li>
                                          <a href="" target="_blank" rel="noopener noreferrer">
                                                <Discord />
                                          </a>
                                    </li>
                                    <li>
                                          <a href="http://">
                                                <Youtube />
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://www.linkedin.com/in/badejo-emmanuel-890414293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                                <LinkedIn />
                                          </a>
                                    </li>
                                    <li>
                                          <a href="mailto:badejoemmanuel805@gmail.com">
                                                <Gmail />
                                          </a>

                                    </li>
                              </ul>
                              <p className='h-12 text-muted-foreground mt-10 text-xs'>© 2024 Reweb - P.IVA 03917380127</p>
                        </div>
                        <ul className='flex gap-20'>
                              <ul className='space-y-4'>
                                    <li className='font-geist-sans font-semibold'>
                                          <a href="">
                                                Community
                                          </a>
                                    </li>
                                    <li className='text-muted-foreground text-sm'>
                                          <a href="">
                                                Discord
                                          </a>
                                    </li>
                                    <li className='text-muted-foreground text-sm'>
                                          <a href="">
                                                Affiliates
                                          </a>
                                    </li>
                              </ul>
                              <ul className='space-y-4'>
                                    <li className='font-geist-sans font-semibold'>
                                          <a href="">
                                                Legal
                                          </a>
                                    </li>
                                    <li className='text-muted-foreground text-sm'>
                                          <a href="">
                                                Terms of Service
                                          </a>
                                    </li>
                                    <li className='text-muted-foreground text-sm'>
                                          <a href="">
                                                Privacy policy
                                          </a>
                                    </li>

                              </ul>
                        </ul>
                  </div>
            </footer >
      )
}

export default Footer 