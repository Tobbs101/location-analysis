/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const exportToCSV = (data: any[], filename: string) => {
  if (!data || data.length === 0) {
    console.error("No data provided for CSV export.");
    return;
  }

  // Function to format headers (capitalize and add spaces for camelCase)
  const formatHeader = (header: string) => {
    return header
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  const headers = Object.keys(data[0]).map(formatHeader); // Format headers
  const csvRows = [];

  // Add formatted header row
  csvRows.push(headers.join(","));

  // Add data rows
  data.forEach((row) => {
    const values = Object.keys(row).map((key) => `"${row[key]}"`); // Handle values properly
    csvRows.push(values.join(","));
  });

  // Convert array to CSV string
  const csvString = csvRows.join("\n");

  // Create a Blob object
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  // Create a temporary link and trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
