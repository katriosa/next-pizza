export function scrollToCategory(
  id: number,
  name: string,
  setActiveId: (id: number) => void,
  setIsManualScroll: (value: boolean) => void
) {
  setIsManualScroll(true);
  setActiveId(id);

  document.getElementById(name)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => {
    setIsManualScroll(false);
  }, 1000);
}
