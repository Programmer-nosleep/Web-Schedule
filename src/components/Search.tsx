import React from "react"
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command"

const Search: React.FC = () => {
  return (
    <Command className="rounded-lg border shadow-md w-full max-w-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandItem>Dashboard</CommandItem>
        <CommandItem>Schedule</CommandItem>
        <CommandItem>Users</CommandItem>
      </CommandList>
    </Command>
  )
}

export default Search