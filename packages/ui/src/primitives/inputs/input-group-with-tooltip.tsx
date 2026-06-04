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
import { IconSquareRoundedChevronDownFilled, IconInfoSquareRoundedFilled, IconStar } from "@tabler/icons-react"
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
          <FieldLabel htmlFor="url">Button Group</FieldLabel>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <InputGroup>
              <InputGroupInput id="url" />
              <InputGroupAddon align="inline-end">
                <IconAlertSquareRoundedFilled />
              </InputGroupAddon>
            </InputGroup>
            <ButtonGroupText>.com</ButtonGroupText>
          </ButtonGroup>
          <FieldDescription>
            This is a description of the input group.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </TooltipProvider>
  )
}
