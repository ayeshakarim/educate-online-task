import { sortStrings } from "../src/sortStrings";

const mockArray: string[] = [
  "interface",
  "finish",
  "surgeon",
  "load",
  "smart",
  "eyebrow",
  "admission",
  "highway",
  "provide",
  "vein",
  "perception",
  "sit",
  "beach",
  "model",
  "therapist",
];

describe("sortStrings", () => {
  it("should return a sorted array without modifying the original array", () => {
    const sortedArray = sortStrings(mockArray);

    expect(mockArray).toEqual(mockArray);
    expect(sortedArray).toEqual([
      "admission",
      "beach",
      "eyebrow",
      "finish",
      "highway",
      "interface",
      "load",
      "model",
      "perception",
      "provide",
      "sit",
      "smart",
      "surgeon",
      "therapist",
      "vein",
    ]);
  });

  it("should handle empty array", () => {
    const emptyArray: string[] = [];
    const sortedArray = sortStrings(emptyArray);

    expect(sortedArray).toEqual([]);
    expect(emptyArray).toEqual([]);
  });

  it("should handle single element array", () => {
    const singleArray: string[] = ["ayesha"];
    const sortedArray = sortStrings(singleArray);

    expect(sortedArray).toEqual(["ayesha"]);
    expect(singleArray).toEqual(["ayesha"]);
  });

  it("should handle duplicate values in array", () => {
    const duplicatesArray: string[] = [
      ...mockArray,
      "interface",
      "finish",
      "surgeon",
      "load",
    ];
    const sortedArray = sortStrings(duplicatesArray);

    expect(sortedArray).toEqual([
      "admission",
      "beach",
      "eyebrow",
      "finish",
      "finish",
      "highway",
      "interface",
      "interface",
      "load",
      "load",
      "model",
      "perception",
      "provide",
      "sit",
      "smart",
      "surgeon",
      "surgeon",
      "therapist",
      "vein",
    ]);
    expect(duplicatesArray).toEqual([
      ...mockArray,
      "interface",
      "finish",
      "surgeon",
      "load",
    ]);
  });

  it("should handle pre-sorted array", () => {
    const alreadySortedArray: string[] = [
      "ayesha",
      "ben",
      "christine",
      "david",
      "elan",
      "fatima",
      "georg",
    ];
    const sortedArray = sortStrings(alreadySortedArray);

    expect(sortedArray).toEqual([
      "ayesha",
      "ben",
      "christine",
      "david",
      "elan",
      "fatima",
      "georg",
    ]);
    expect(alreadySortedArray).toEqual([
      "ayesha",
      "ben",
      "christine",
      "david",
      "elan",
      "fatima",
      "georg",
    ]);
  });

  it("should ignore text casing", () => {
    const mixedCaseArray: string[] = [
      "elan",
      "Sam",
      "georG",
      "chriTtine",
      "Ayesha",
      "david",
      "fatIma",
    ];
    const sortedArray = sortStrings(mixedCaseArray);

    expect(sortedArray).toEqual([
      "Ayesha",
      "chriTtine",
      "david",
      "elan",
      "fatIma",
      "georG",
      "Sam",
    ]);
    expect(mixedCaseArray).toEqual([
      "elan",
      "Sam",
      "georG",
      "chriTtine",
      "Ayesha",
      "david",
      "fatIma",
    ]);
  });
});

it("should handle numeric values in array", () => {
  const duplicatesArray: string[] = [...mockArray, "15", "82", "46"];
  const sortedArray = sortStrings(duplicatesArray);

  expect(sortedArray).toEqual([
    "15",
    "46",
    "82",
    "admission",
    "beach",
    "eyebrow",
    "finish",
    "highway",
    "interface",
    "load",
    "model",
    "perception",
    "provide",
    "sit",
    "smart",
    "surgeon",
    "therapist",
    "vein",
  ]);
  expect(duplicatesArray).toEqual([...mockArray, "15", "82", "46"]);
});

