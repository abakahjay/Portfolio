import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "GhanaCropGuard AI",
    description: "Crop disease and pest detection for Ghanaian farmers: a MobileNetV3 model trained on 24,881 CCMT field photos (89% test accuracy), served with ONNX Runtime inside a Node.js API, with a React web app, an installable PWA and an Android app.",
    tech: ["PyTorch", "ONNX", "React", "Expo", "Node.js", "MongoDB"],
    image: "/projects/ghanacropguard.webp",
    liveUrl: "https://ghanacropguard-web.onrender.com",
    githubUrl: "https://github.com/abakahjay/ghanacropguard-ai"
  },
  {
    title: "CleanBridge GH",
    description: "Waste collection for Ghana: households book a pickup in a minute, pay with Mobile Money or cash, and watch their collector arrive on a live map. Collector and operations apps, weekly and monthly plans, push notifications, on web, Android and Windows.",
    tech: ["React", "Leaflet", "Node.js", "MongoDB", "Paystack", "SSE"],
    image: "/projects/cleanbridge.webp",
    liveUrl: "https://cleanbridge-gh.onrender.com",
    githubUrl: "https://github.com/abakahjay/CleanBridge-GH"
  },
  {
    title: "BillNova AI Partners",
    description: "Company website for BillNova AI Partners Limited, a responsible-AI advisory firm in Ghana: service pages, an animated framework diagram, and a contact form that sends enquiries to the firm.",
    tech: ["React", "Vite", "Chakra UI", "Node.js"],
    image: "/projects/billnova.webp",
    liveUrl: "https://billnova-ai-partners-website.onrender.com",
    githubUrl: "https://github.com/abakahjay/BillNova-AI-Partners-Website"
  },
  {
    title: "The Anatomy of a Suit",
    description: "A scroll-driven film site for a bespoke tailor: scrolling scrubs a 535-frame film cut from real footage, shirt to waistcoat to the final fitting, while the chapter text rises in over each scene. Separate portrait frames for phones and a still-image layout for reduced motion.",
    tech: ["React", "Vite", "GSAP", "Lenis", "Canvas", "FFmpeg"],
    image: "/projects/anatomyofasuit.webp",
    liveUrl: "https://anatomy-of-a-suit.onrender.com",
    githubUrl: "https://github.com/abakahjay/Anatomy-of-a-Suit"
  },
  {
    title: "JayRouter",
    description: "One OpenAI-compatible API over the free tiers of Gemini, Groq, OpenRouter and Cohere: 32 models and about 165M free tokens a month, with automatic failover when a provider hits its limit. My rebranded, hardened deployment of the open-source FreeLLMAPI router on Render, wired into Claude Code, Codex, OpenCode and VS Code agents.",
    tech: ["Node.js", "TypeScript", "React", "SQLite", "Docker", "Render"],
    image: "/projects/jayrouter.webp",
    liveUrl: "https://jayrouter.onrender.com",
    githubUrl: "https://github.com/abakahjay/JayRouter"
  },
  {
    title: "Finance Tracker",
    description: "A personal income/expense tracker with per-user data, Google OAuth login, and live toast notifications — backed by a real REST API rather than local mock data.",
    tech: ["React", "Vite", "Node.js", "MongoDB", "Express"],
    image: "/projects/financetracker.webp",
    liveUrl: "https://finance-tracker-8iel.onrender.com",
    githubUrl: "#"
  },
  {
    title: "SeedBridge",
    description: "AI-powered Farmer-to-Buyer agricultural marketplace facilitating direct trade, price prediction, and supply chain visibility for farmers and buyers.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI"],
    image: "/projects/seedbridge.webp",
    liveUrl: "https://seedbridge-blueprint.onrender.com",
    githubUrl: "#"
  },
  {
    title: "GH-GPT",
    description: "AI assistant for writing, coding and questions about images and documents, with saved chats, image generation and Google sign-in. Routes requests across OpenRouter, Google Gemini and OpenAI so it stays up when one provider is down.",
    tech: ["React", "Node.js", "Express", "OpenRouter", "Gemini"],
    image: "/projects/ghgpt.webp",
    liveUrl: "https://gh-gpt.onrender.com",
    githubUrl: "#"
  },
  {
    title: "Nsoro",
    description: "Social app for sharing moments — feeds, posts, stars, profiles, end-to-end encrypted chat and voice/video calls — on web, Android, Windows and TV.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/nsoro.png",
    liveUrl: "https://nsoro-app.onrender.com",
    githubUrl: "#"
  },
  {
    title: "Universal Backend Service",
    description: "A fully integrated backend service designed for easy reuse across all of my applications — centralizing auth, data, and API logic in one place.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    image: "/projects/fullbackend.webp",
    liveUrl: "https://fullbackendd.onrender.com",
    githubUrl: "#"
  },
  {
    title: "OpenLabs Backend",
    description: "A lightweight, dedicated backend service built to power a set of smaller experimental projects and prototypes.",
    tech: ["Node.js", "Express", "REST API"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://openlabs-project-2.onrender.com",
    githubUrl: "#"
  }
];

export function FeaturedProjects() {
  return (
    <Box as="section" id="projects" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Featured Projects
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            A selection of my best technical work, highlighting architecture, design, and problem-solving.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box 
                bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase" 
                overflow="hidden" position="relative" role="group" h="full" display="flex" flexDirection="column"
              >
                <Box h="250px" overflow="hidden" position="relative">
                  <Image 
                    src={project.image} alt={project.title} w="full" h="full" objectFit="cover"
                    transition="transform 0.5s ease" _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box 
                    position="absolute" inset={0} bg="rgba(0,0,0,0.5)" opacity={0} 
                    transition="opacity 0.3s ease" _groupHover={{ opacity: 1 }}
                    display="flex" alignItems="center" justifyContent="center" gap={4}
                  >
                    <Box 
                      as="a" href={project.liveUrl} target="_blank"
                      bg="brand.500" color="white" w={12} h={12} borderRadius="full" 
                      display="flex" alignItems="center" justifyContent="center"
                      transform="translateY(20px)" opacity={0} transition="all 0.3s ease" _groupHover={{ transform: "translateY(0)", opacity: 1 }}
                      _hover={{ bg: "brand.600" }} title="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </Box>
                    <Box 
                      as="a" href={project.githubUrl} target="_blank"
                      bg="background.dark" color="white" w={12} h={12} borderRadius="full" 
                      display="flex" alignItems="center" justifyContent="center" border="1px solid" borderColor="borderBase"
                      transform="translateY(20px)" opacity={0} transition="all 0.3s ease 0.1s" _groupHover={{ transform: "translateY(0)", opacity: 1 }}
                      _hover={{ bg: "gray.800" }} title="Source Code"
                    >
                      <FiGithub size={20} />
                    </Box>
                  </Box>
                </Box>
                <Box p={8} flex={1} display="flex" flexDirection="column">
                  <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="700" mb={3} color="textBase" _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                    {project.title}
                  </Heading>
                  <Text color="textMuted" mb={6} flex={1}>
                    {project.description}
                  </Text>
                  <Flex flexWrap="wrap" gap={2}>
                    {project.tech.map(tech => (
                      <Box key={tech} px={3} py={1} bg="glass.dark" color="brand.500" borderRadius="md" fontSize="xs" fontWeight="600" border="1px solid" borderColor="borderBase">
                        {tech}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
