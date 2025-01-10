import React, { useState } from 'react'


export const pricing_list = [
      {
            name: "Hobby",
            use_case: "For exploring and trying Reweb",
            plan: "Free",
            todo: "Get started",
            features: [
                  { name: "1 User" },
                  { name: "2 Projects" },
                  { name: "5 Code exports", tooltip: "Limited to individual blocks export" },
                  { name: "Limited Access to Reweb AI" },
                  { name: "Reweb branding on shared links" },
            ]
      },
      {
            name: "Pro",
            use_case: "For solo developers & designers.",
            plan: ["$12", "/ month"],
            todo: "Upgrade to Pro",
            features: [
                  { name: "Unlimited Projects" },
                  { name: "10x Higher AI Limits", tooltip: "100 Generations per month" },
                  { name: "Unlimited Code Exports", tooltip: "Includes full project export" },
                  { name: "CLI Export" },
                  { name: "No Reweb branding on shared links" },
            ]
      },
      {
            name: "Team",
            use_case: "For collaborative teams.",
            plan: "Coming Soon",
            todo: "Join waitlist",
            features: [
                  { name: "Invite your team members" },
                  { name: "Even Higher AI Limits" },
                  { name: "Priority Support" },
                  { name: "Limited Access to Reweb AI" },
                  { name: "Centralized billing" },
            ]
      },
]


const Pricing = () => {
      const state = useState(true)
      return (
            <section className='container py-20 text-white'>
                  <div className='flex w-full flex-col gap-4'>
                        <h1 className='text-center font-heading sm:text-5xl text-3xl  tracking-tighter font-medium'>Pricing</h1>
                        <p className='text-center text-muted-foreground sm:text-lg'>Choose the plan that works for you.</p>
                        <div className='mx-auto rounded-[calc(1rem-3px)] gap-2 bg-[hsl(var(--muted))] flex items-center  p-[0.2rem]'>
                              <button className='bg-black font-heading font-medium text-sm p-2 rounded-[calc(1rem-5px)]'>Monthly</button>
                              <button className={`px-[12px] ${state && "bg-[hsl(var(--background))]"}  rounded-[calc(1rem-5px)] hover:text-[hsl(var(--secondary-foreground))] p-2 flex gap-2`}><span>Yearly</span> <span className='text-[hsl(var(--primary))]'>(saves 30%)</span></button>
                        </div>
                        <div className='flex flex-col sm:px-5'>
                              <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
                                    {
                                          pricing_list.map((data) => {
                                                return <PricingCard data={data} />
                                          })
                                    }

                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Pricing


const PricingCard = ({ data }) => {

      return (
            <div className='bg-card text-white rounded-[0.9rem]  flex flex-col p-8'>
                  <div className='flex flex-col gap-4'>
                        <h1 className='font-heading text-2xl font-semibold'>{data.name}</h1>
                        <p className='text-muted-foreground'>{data.use_case}</p>
                        <h1 className='font-heading text-4xl  whitespace-nowrap font-semibold'>
                              {
                                    Array.isArray(data.plan) ?
                                          <div> {data.plan[0]}  <span className='text-muted-foreground text-lg font-normal'>{data.plan[1]}</span> </div>
                                          : data.plan
                              }
                        </h1>
                        <button className='w-full rounded-[calc(1rem-2px)] bg-[hsl(var(--primary))] my-4 h-11 whitespace-nowrap p-4 flex items-center text-balance text-sm justify-center'>{data.todo}</button>

                        <ul className='space-y-3'>
                              {
                                    data.features.map(({ name, ...rest }, index) => {
                                          const tooltip = rest.tooltip
                                          return <li key={index} className='flex items-center gap-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check text-[hsl(var(--primary))]"><path d="M20 6 9 17l-5-5"></path></svg>
                                                <div className='whitespace-nowrap  flex gap-3 items-center relative'>{name}
                                                      {
                                                            tooltip && (
                                                                  <>
                                                                        <span className='relative w-fit group'>
                                                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4 cursor-pointer text-[hsl(var(--foreground)/.35)]"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>

                                                                              <p className='absolute translate-y-6  transition-transform group-hover:translate-y-0 duration-200 group-hover:opacity-100 opacity-0  text-sm left-1/2 -top-[calc(100%+20px)] bg-slate-900 -translate-x-1/2 rounded-lg px-2 text-white size-0 group-hover:size-auto p-1 '>{tooltip}</p>
                                                                        </span>
                                                                  </>


                                                            )}


                                                </div>
                                          </li>
                                    })
                              }

                        </ul>
                  </div>
            </div>)
}