import React from "react";
import usePopper from "@restart/ui/usePopper";
import debounce from "lodash/debounce";

export function useHookMegaHeader() {
    const [referenceElement, setReferenceElement] =
      React.useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
      null
    );
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: "bottom-start",
    });
    const [isListOpen, setListOpen] = React.useState<number | null>(null);
    const debounceMouseOver = debounce(id => setListOpen(id), 1000);
  
    return {
      isListOpen,
      setListOpen,
      debounceMouseOver,
      styles,
      attributes,
      setPopperElement,
      setReferenceElement
    };
  }