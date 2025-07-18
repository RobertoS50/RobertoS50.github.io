import "@testing-library/jest-dom";
import formatDate from "@/util/formatDate";

//TODO 35: !!FUTURE!! Check different locales and languages test case as other countries are not working as expected

describe("formatDate", (): void => {
  // Test default English (US) locale formatting
  it("formats ISO date string correctly for en-US locale", (): void => {
    expect(formatDate("2023-05-15", "en-US")).toBe("May 2023");
    expect(formatDate("1998-12-01", "en-US")).toBe("Dec 1998");
    expect(formatDate("2000-01-20", "en-US")).toBe("Jan 2000");
  });

  // Test different locales
  it("formats date according to specified locale", (): void => {
    // Spanish
    expect(formatDate("2023-05-15", "es-ES")).toBe("may 2023");
    // German
    expect(formatDate("2023-05-15", "de-DE")).toBe("Mai 2023");
    // French
    expect(formatDate("2023-05-15", "fr-FR")).toBe("mai 2023");
    // Japanese
    expect(formatDate("2023-05-15", "ja-JP")).toBe("2023年5月");
  });

  // Test edge cases
  it('handles "Present" keyword correctly', (): void => {
    expect(formatDate("Present", "en-US")).toBe("Present");
    expect(formatDate("Present", "es-ES")).toBe("Present");
    expect(formatDate("Present", "ja-JP")).toBe("Present");
  });
});
