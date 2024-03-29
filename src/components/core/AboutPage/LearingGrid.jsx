import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../HomePage/Button"

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];



const LearingGrid = () => {
  return (
    <div className='grid mx-auto grid-col-1 lg:grid-cols-4 mb-10'>
        {
            LearningGridArray.map((card,index) => {
                return (
                    //to merge two col we use col-spans
                    <div 
                      key={index} className={`${index === 0 && "lg:col-span-2 lg:h-[250px] "} 
                    ${
                        card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800  lg:h-[250px"
                    }
                    ${card.order === 3 && "lg:col-start-2"} 
                    ${card.order <0 && "bg-transparent"}`}
                    >
                     
                     {
                        card.order < 0 ? (
                            <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>

                                <div className='text-4xl font-semibold'>
                                    {card.heading}
                                    <HighlightText text = {card.highlightText}/>
                                </div>

                                <p className='font-medium '>{card.description}</p>

                                <div className='w-fit mt-4'>
                                    <CTAButton active = {true} linkto = {card.BtnLink}>
                                      LearncMore
                                    </CTAButton>
                                </div>
                            </div>
                        ) : 
                        (
                            <div>
                                <h1>{card.heading}</h1>
                                <p>{card.description}</p>
                            </div>
                        )
                     }
                    </div>
                )
            })
        }
    </div>
  )
}

export default LearingGrid