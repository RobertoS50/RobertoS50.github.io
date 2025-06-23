/**
 * @file formatDate.tsx
 *
 * @what
 * Formats the date to a standard readable format.
 *
 * @assumptions
 * The date is in the format YYYY-MM-DD (ISO format).
 *
 * @possibleAdditions
 * - Can be changed to take in extra parameters to format the date in a different way, like with a day included or just a year.
 * - userLocale is not currently a global variable but can be turned into one
 *
 * @param dateStr - date string to be formatted
 * @param userLocale - user's locale to format the date string, defaults to "en-US"
 *
 * @related
 * Implemented in:
 * - JobList.tsx
 * - SampleList.tsx
 */

//TODO 34: Add tests for this function

function formatDate(dateStr: string, userLocale: string): string {
  if (dateStr === "Present") return dateStr;
  else {
    const [year, month, day] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}`).toLocaleDateString(userLocale, {
      year: "numeric",
      month: "short",
    });
  }
}

export default formatDate;
