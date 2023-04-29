import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Survey.</h2>
        Help lines available for people are not entirely available throughout the day as per the surveys and observation the most vulnerable time of poor mental stability or suicidal thoughts is between 2am to 5am which is during the mid-night mostly the phone numbers available on internet are from 10 am to 8 pm which is no where near the most prone time .
        People on the calls are not too joyful or knowledgeable About a person having trouble with his mental health
        .However, it is important to consider the ethical implications of using AI-based robots in caregiving, including issues related to privacy, autonomy, and the potential for overreliance on technology. Careful consideration and implementation of such robots can ensure that they are a valuable addition to the care provided to the elderly population
        contact us to know more about us :ajaysingh472700@gmail.com
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
  
        
        Over 20% of adult age 60and over suffer from a mental or neurological disorder (excluding headache)
        Every 1 in every 5 old people is currently living with mental illness the three most
       Common diagnosis are 
       •	Anxiety disorder
       •	Depression
       •	Post traumatic stress disorder
       •	Confusion , memory loss especially short term memory problems
       •	Fatique,energy loss,trouble sleeping
       •	Social withdrawal
       •	General disinterest
       AI technology has both great promises to transform mental health care and potential pitfalls. 
AI will help mental health practitioners re-define mental illness more objectively than currently done identify these illness at an earlier or prodromal stage when interventions may be more effective and precautions treatments based on individuals most treatments are include in:
-	Somatic treatment: includes drugs etc. other therapist that stimulate the brain.
-	Physiotherapy: individual group of family behavior therapy (relaxation training) and hypnotherapy.
-	Drug therapy: Antidepressant drug, Antipsychotic drug, antianxiety drug.
Psychotherapy: . Cognitive,Interpersonal therapy,Psychoanalysis, Behavioral
AI is currently being used to facilitate early disease detection enable better understanding of diseases progression, optimize medicines/ treatment.
A major strength of AI is rapid pattern analysis of large datasets. Area of medicine must successful in pattern recognition include ophthalmology, cancer detection & radiology where AI algorithms can perform as well or better than experience  clinicians in evolutionary images for things undetectable to human eye (eg: gender from the retina).
AI will support clinical decision making, while human learning is limited, AI powered machines can rapidly sensitize information from an unlimited amount of medical information sources.
Mental health has much to benefit from AI technology and offers better pre diagnosis screening tools

hysiotherapy is the required treatment for mental illness
. Behavioral therapy
.  Cognitive therapy
. Interpersonal therapy
. Psychoanalysis
. Supportive physiotherapy
Naturally
. Staying active & getting physical exercise
. Stay connected
. Try to get better sleep
. Avoid unhealthy loping mechanism
Treatments
. Physiotherapy or counseling also called talk therapy
. Prescription medicines
. Support groups
. ECT or brain stimulation therapy
. Hospital treatments
Many old age people are willing to learn new things like using a phone or playing new games this not only keeps them busy but also keep them mentally active and this will not make them feel lethargic and tired all day also reading them or making them read books and help them know about new thing or get knowledge on the same
Yes if the the robot will have a good voic pitch and can solve their problems or help them in one way or other will seem facinating for the them and also they would love to know about what else can the particular thing that it can do.



    


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
