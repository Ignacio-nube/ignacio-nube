
import { Box, Container, Heading, Text, VStack, HStack, Link, SimpleGrid, Icon, Separator } from "@chakra-ui/react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import Pattern from "./componentes/Fondo"
import Card from "./components/card"
import Social from "./components/social"
import { Toaster } from "@/components/ui/toaster"
import data from "./data.json"

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

function App() {
  const { profile, projects } = data

  return (
    <Box minH="100vh" position="relative" overflow="hidden" color="white">
      <Pattern />
      <Toaster />
      
      <Container maxW="4xl" py={10} position="relative" zIndex={1}>
        <VStack gap={12} align="stretch">
          
          {/* Header / Presentation */}
          <MotionBox 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            p={10} 
            borderRadius="2xl" 
            bg="rgba(255, 255, 255, 0.03)" 
            backdropFilter="blur(16px)" 
            border="1px solid" 
            borderColor="rgba(255, 255, 255, 0.08)"
            shadow="2xl"
            textAlign="center"
          >
            <VStack align="center" gap={6}>
              <Box>
                <Heading size="4xl" mb={3} color="teal.200">
                  {profile.name}
                </Heading>
                <Text fontSize="xl" color="gray.300" fontWeight="medium">{profile.role}</Text>
              </Box>
              
              <HStack gap={6} wrap="wrap" justify="center" color="gray.400" fontSize="sm">
                <HStack>
                  <Icon as={FaMapMarkerAlt} color="teal.300" />
                  <Text>{profile.location}</Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color="teal.300" />
                  <Link href={`mailto:${profile.email}`} color="gray.300" _hover={{ color: "white" }}>{profile.email}</Link>
                </HStack>
                 <HStack>
                  <Icon as={FaPhone} color="teal.300" />
                  <Text>{profile.phone}</Text>
                </HStack>
              </HStack>

              <Box py={2}>
                <Social 
                  github={profile.social.github}
                  linkedin={profile.social.linkedin}
                  discord={profile.social.discord}
                  whatsapp={profile.social.whatsapp}
                />
              </Box>

              <Separator borderColor="whiteAlpha.100" maxW="200px" />

              <Text color="gray.300" lineHeight="tall" fontSize="lg" maxW="2xl">
                {profile.summary}
              </Text>
            </VStack>
          </MotionBox>

          {/* Projects Section */}
          <MotionVStack 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            align="stretch" 
            gap={8}
          >
            <Heading size="2xl" textAlign="center" mb={4}>
              <Text as="span" borderBottom="3px solid" borderColor="teal.500" pb={2}>
                Proyectos
              </Text>
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card 
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    link={project.link}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </SimpleGrid>
          </MotionVStack>

        </VStack>
      </Container>
    </Box>
  )
}

export default App
