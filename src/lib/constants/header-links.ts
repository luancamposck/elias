import { PROPOSALS } from "@/lib/constants"

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
    proposals: PROPOSALS
  },
  {
    id: 2,
    name: "Desburocratize",
    href: "/streamline"
  },
  {
    id: 3,
    name: "Denuncie",
    href: "/denuncie"
  }
]

export default HEADER_LINKS
