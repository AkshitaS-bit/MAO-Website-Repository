"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"

type NavChild = { href: string; label: string }
type NavItem = { label: string; href?: string; children?: NavChild[] }

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/officers", label: "Officers" },
    ],
  },
  { label: "Calendar", href: "/calendar" },
  {
    label: "Members",
    children: [
      { href: "/join", label: "Membership Registration" },
      { href: "/officer-application", label: "Officer Application" },
    ],
  },
  { label: "Competitions", href: "/competitions" },
  {
    label: "Resources",
    children: [
      { href: "/resources/theta", label: "Theta Resources" },
      { href: "/resources/alpha", label: "Alpha Resources" },
      { href: "/resources/mu", label: "Mu Resources" },
      { href: "/resources/stat", label: "Stat Resources" },
      { href: "/resources/amc-10-12", label: "AMC 10/12 Resources" },
    ],
  },
]

export function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenMobileGroup(null)
  }, [pathname])

  const isActive = (href: string) => pathname === href
  const isGroupActive = (item: NavItem) =>
    item.children?.some((child) => pathname === child.href) ?? false
  const isHomeHero = pathname === "/"
  const isWhiteHomeNav = isHomeHero && !isScrolled
  const isTransparentHomeNav = false

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isWhiteHomeNav
          ? "bg-white border-gray-200 shadow-sm py-4"
          : isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-gray-100 py-3"
            : "bg-white border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-lg overflow-hidden bg-[#6B0000] group-hover:scale-105 transition-transform shadow-md ring-1 ring-[#D4AF37]/30">
              <img
                src="/mao-tiger-logo.jpeg"
                alt="Middleton MAO tiger logo"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <span className={`${isTransparentHomeNav ? "text-white" : "text-[#6B0000]"} font-display font-semibold text-[1.1rem] tracking-tight block leading-tight`}>
                Middleton MAO
              </span>
              <span className={`${isTransparentHomeNav ? "text-white/70" : "text-gray-500"} text-xs`}>Mu Alpha Theta</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isGroupActive(item)
                        ? isTransparentHomeNav ? "text-white bg-white/15" : "text-[#6B0000] bg-[#6B0000]/5"
                        : isTransparentHomeNav ? "text-white/85 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-[#6B0000] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 w-60 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                            isActive(child.href)
                              ? "text-[#6B0000] bg-[#6B0000]/5"
                              : "text-gray-600 hover:text-[#6B0000] hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(item.href!)
                      ? isTransparentHomeNav ? "text-white bg-white/15" : "text-[#6B0000] bg-[#6B0000]/5"
                      : isTransparentHomeNav ? "text-white/85 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-[#6B0000] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:block shrink-0">
            <Button
              asChild
              className="bg-[#6B0000] text-white hover:bg-[#8B0000] font-medium transition-all hover:shadow-lg"
            >
              <Link href="/join">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isTransparentHomeNav ? "text-white hover:bg-white/10" : "text-[#6B0000] hover:bg-gray-100"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[640px] mt-4 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isGroupActive(item) ? "text-[#6B0000] bg-[#6B0000]/5" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openMobileGroup === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMobileGroup === item.label ? "max-h-64" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 pl-4 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`px-4 py-2.5 text-sm rounded-lg transition-colors ${
                            isActive(child.href)
                              ? "text-[#6B0000] bg-[#6B0000]/5 font-medium"
                              : "text-gray-500 hover:text-[#6B0000] hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href!)
                      ? "text-[#6B0000] bg-[#6B0000]/5"
                      : "text-gray-600 hover:text-[#6B0000] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button
              asChild
              className="mt-2 bg-[#6B0000] text-white hover:bg-[#8B0000] font-medium"
            >
              <Link href="/join">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
