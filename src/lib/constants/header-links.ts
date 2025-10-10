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
    name: "Músicas",
    href: "/musicas"
  },
  {
    id: 3,
    name: "Desburocratize",
    href: "/desburocratize"
  },
  {
    id: 4,
    name: "Denuncie",
    href: "/denuncie"
  }
]

export default HEADER_LINKS
