import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Meet, <br /> Lucy.
        </BigTitle>
        <Subtitle>A creative mobile AR application that identifies spatial diameters, and renders 3-D interior content in real-time.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Our Features</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Add + Drop"
            link="https://lucyar.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Add and 
          </ProjectCard>
          <ProjectCard
            title="Move + Drag"  
            link="https://lucyar.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Our move and drag feature allows you to drag content across different spatial rooms and environments to make sure you've considered every option. Whether that chair looks best in the Living Room or in the kids room, we want to make sure you've considered all the options. 
          </ProjectCard>
          <ProjectCard
            title="Make notations"
            link="https://lucyar.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Not sure if that table will fit into the kitchen? Use our drawing feature to make a note about it and come back to it later. 
          </ProjectCard>
          <ProjectCard
            title="Sharing Feature"
            link="https://lucyar.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Don't know whether 
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Our Story</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Greg" />
          <AboutSub>
            After travelling for exchange and 
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">hi</a> and shoot us an email if you're interested in learning more. Our application is coming to the Google Play Store by March 2019. {' '}
            
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Copyright LucyAR {' '}
          <a href="https://github.com/lucyar/promo-website">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LucyAR Team with </a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
