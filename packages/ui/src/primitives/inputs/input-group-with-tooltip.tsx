"use client"

import { ButtonGroup } from "@buttons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@dropdowns"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@auto-form"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "./input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui"
import { IconChevronDown, IconInfoCircle, IconStar } from "@tabler/icons-react"
import * as React from "react"

const COUNTRIES = ["US", "UK", "CA", "AU", "DE"]

export function InputGroupWithTooltip() {
  const [country, setCountry] = React.useState("US")

  return (
    <TooltipProvider>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-tooltip-29">
            Input Group with Tooltip
          </FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-tooltip-29" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconInfoCircle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip.</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupAddon>
                  {country} <IconChevronDown />
                </InputGroupAddon>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {COUNTRIES.map((c) => (
                  <DropdownMenuItem key={c} onClick={() => setCountry(c)}>
                    {c}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupInput id="input-tooltip-30" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconInfoCircle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip.</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-tooltip-31">With Buttons</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-tooltip-31" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton variant="ghost" size="icon-xs">
                    <IconStar />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to favorites</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton variant="ghost" size="icon-xs">
                    <IconInfoCircle />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More information</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </TooltipProvider>
  )
}
