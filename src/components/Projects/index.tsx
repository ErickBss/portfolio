import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { Project } from './Project'

export function Projects() {
  return (
    <Flex bg="purple.900" w="100vw" minH="100vh">
      <Flex
        direction="column"
        gap={{ base: '2rem', md: '1rem', xl: 0 }}
        justify="space-evenly"
        alignItems={{ base: 'center', md: 'flex-start' }}
        m="0 auto"
        w={{
          base: '26rem',
          sm: '30rem',
          md: '54rem',
          lg: '64rem',
          xl: '70rem',
        }}
        p="2rem  0"
      >
        <Element name="projects">
          <Heading color="purple.400" fontSize="2rem">
            Projects:
          </Heading>
        </Element>
        <Box>
          <Text fontSize="1.125rem">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </Text>
          <Text color="gray.400" fontStyle="italic" fontSize="1.125rem">
            Projects with (*) has instructions, so, read the Readme.md on github
            to start the project correctly
          </Text>
        </Box>

        <Flex
          w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          flexWrap="wrap"
          gap="2rem"
          justifyContent={{ base: 'center', xl: 'space-between' }}
        >
          <Project
            image="/spacetraveling.svg"
            title="Spacetraveling"
            description="Blog to expose articles about the TI world."
            published_link="http://space-traveling-nine.vercel.app/"
            repo_link="https://github.com/ErickBss/space-traveling"
          />

          <Project
            image="/covid.png"
            title="Covid Daily Cases (*)"
            description="Project about worldwide statistics of Covid-19 and variants cases, filtered by daily and total cases."
            warning="For a correct use, read the instructions on the Github repository"
            published_link="http://challenge-covid-daily-cases.vercel.app/"
            repo_link="https://github.com/ErickBss/Challenge-Covid-Daily-Cases"
          />

          <Project
            image="/prisma.png"
            title="Refresh token JWT"
            description="Project to practice authentication with JWT and revalidation with refresh tokens."
            warning="For a correct use, read the instructions on the Github repository"
            repo_link="https://github.com/ErickBss/Challenge-Covid-Daily-Cases"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
