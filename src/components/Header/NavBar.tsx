import { Flex, Link } from '@chakra-ui/react'

import { Link as ScrollLink } from 'react-scroll'

interface NavBarProps {
  closeDrawer?: () => void
}

export function NavBar({ closeDrawer }: NavBarProps) {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justify="space-between"
      gap={{ base: '2rem', md: 0 }}
      fontWeight={600}
      w={{ base: 'auto', md: '28rem' }}
      fontSize="1.125rem"
    >
      <Link
        onClick={() => (closeDrawer ? closeDrawer() : '')}
        color="purple.400"
      >
        Home
      </Link>
      <ScrollLink to="about" smooth={true}>
        <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>About me</Link>
      </ScrollLink>

      <ScrollLink to="projects" smooth={true}>
        <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>Projects</Link>
      </ScrollLink>

      <ScrollLink to="contact" smooth={true}>
        <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>Contact</Link>
      </ScrollLink>
    </Flex>
  )
}
