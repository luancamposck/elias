import { PROPOSALS } from "@/lib/constants"

const HEADER_PROPOSAL_ORDER = [
  "security",
  "education",
  "health",
  "assistance",
  "public-service",
  "transport"
]

const HEADER_PROPOSAL_INDEX = new Map(
  HEADER_PROPOSAL_ORDER.map((id, index) => [id, index])
)

const ORDERED_HEADER_PROPOSALS = [...PROPOSALS].sort((a, b) => {
  const indexA = HEADER_PROPOSAL_INDEX.get(a.id) ?? Number.MAX_SAFE_INTEGER
  const indexB = HEADER_PROPOSAL_INDEX.get(b.id) ?? Number.MAX_SAFE_INTEGER
  return indexA - indexB
})

const HEADER_LINKS = [
  {
    id: 0,
    name: "Home",
    href: "/"
  },
  {
    id: 1,
    name: "Propostas",
    href: "#",
    proposals: ORDERED_HEADER_PROPOSALS
  },
  {
    id: 2,
    name: "Desburocratize",
    href: "/desburocratize"
  },
  {
    id: 3,
    name: "Denuncie",
    href: "/denuncia"
  }
]

export default HEADER_LINKS
