import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const websites = [
  {
    title: "GhanaCropGuard AI",
    description: "Photograph a cashew, cassava, maize or tomato leaf and get the likely disease or pest, with a model trained on Ghanaian farm photos. Web and Android app.",
    image: "/projects/ghanacropguard.webp",
    url: "https://ghanacropguard-web.onrender.com"
  },
  {
    title: "CleanBridge GH",
    description: "Book a waste pickup in a minute, pay with Mobile Money or cash, and track the collector on a live map.",
    image: "/projects/cleanbridge.webp",
    url: "https://cleanbridge-gh.onrender.com"
  },
  {
    title: "BillNova AI Partners",
    description: "Website for a responsible-AI advisory firm in Ghana, with service pages and an enquiry form.",
    image: "/projects/billnova.webp",
    url: "https://billnova-ai-partners-website.onrender.com"
  },
  {
    title: "The Anatomy of a Suit",
    description: "Scroll-driven film site for a bespoke tailor: scrolling plays the film, chapter by chapter, from shirt to final fitting.",
    image: "/projects/anatomyofasuit.webp",
    url: "https://anatomy-of-a-suit.onrender.com"
  },
  {
    title: "JayRouter",
    description: "One API key for 32 free AI models across Gemini, Groq, OpenRouter and Cohere, with automatic failover between providers.",
    image: "/projects/jayrouter.webp",
    url: "https://jayrouter.onrender.com"
  },
  {
    title: "Finance Tracker",
    description: "Personal income/expense tracker with Google OAuth and per-user data, backed by a real REST API.",
    image: "/projects/financetracker.webp",
    url: "https://finance-tracker-8iel.onrender.com"
  },
  {
    title: "SeedBridge",
    description: "AI-powered agricultural marketplace connecting farmers directly to buyers.",
    image: "/projects/seedbridge.webp",
    url: "https://seedbridge-blueprint.onrender.com"
  },
  {
    title: "GH-GPT",
    description: "AI assistant for writing, coding, images and documents, with saved chats and Google sign-in.",
    image: "/projects/ghgpt.webp",
    url: "https://gh-gpt.onrender.com"
  },
  {
    title: "Nsoro",
    description: "Social app with feeds, posts, profiles, encrypted chat and calls.",
    image: "/projects/nsoro.png",
    url: "https://nsoro-app.onrender.com"
  },
  {
    title: "Universal Backend Service",
    description: "Fully integrated backend powering all of my applications, built for easy reuse.",
    image: "/projects/fullbackend.webp",
    url: "https://fullbackendd.onrender.com"
  },
  {
    title: "OpenLabs Backend",
    description: "Dedicated backend service powering a set of smaller experimental projects.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    url: "https://openlabs-project-2.onrender.com"
  }
];

export function LiveWebsites() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Live Websites
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            Real, production-deployed projects and services — click through to try them live.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {websites.map((site, idx) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Box 
                borderRadius="xl" overflow="hidden" position="relative" role="group"
                bg="panel" border="1px solid" borderColor="borderBase"
              >
                <Box h="200px" overflow="hidden">
                  <Image 
                    src={site.image} alt={site.title} w="full" h="full" objectFit="cover"
                    transition="transform 0.5s ease" _groupHover={{ transform: "scale(1.05)" }}
                  />
                </Box>
                <Box p={6}>
                  <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={2} color="textBase">
                    {site.title}
                  </Heading>
                  <Text color="textMuted" fontSize="sm" mb={4} noOfLines={2}>
                    {site.description}
                  </Text>
                  <Box 
                    as="a" href={site.url} target="_blank"
                    display="inline-flex" alignItems="center" gap={2} fontSize="sm" fontWeight="600" color="brand.500"
                    _hover={{ color: "brand.400" }}
                  >
                    Visit Live Site <FiExternalLink />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
