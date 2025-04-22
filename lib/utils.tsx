export function formatRouteText(route: string): string {
  if (!route) return "";

  // Remove leading slashes
  const trimmedRoute = route.replace(/^\/+/, "");

  // Replace hyphens with spaces
  const withSpaces = trimmedRoute.replace(/-/g, " ");

  // Capitalize the first letter of each word
  const formattedText = withSpaces.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return formattedText;
}
