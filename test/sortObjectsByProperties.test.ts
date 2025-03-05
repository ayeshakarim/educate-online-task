import { sortObjectsByProperties, Data, Order } from "../src/sortObjectsByProperties";

describe("sortObjectsByProperties", () => {
  const data: Data[] = [
    { name: "christian", age: 40, job: "Developer" },
    { name: "andrew", age: 48, job: "developer" },
    { name: "Elisabeth", age: 31, job: "floor manager" },
    { name: "oscar", age: 61, job: "Floor Manager" },
    { name: "gisela", age: 51, job: "area manager" },
    { name: "buffy", age: 27, job: "trainee" },
    { name: "carl", age: 23, job: "trainee" },
    { name: "David", age: 23, job: "trainee" },
  ];

  it("should sort by one ascending key", () => {
    const order: Order[] = [{ key: "name", direction: "ascending" }];
    const sortedRecords = sortObjectsByProperties(data, order);
    expect(sortedRecords.map((r) => r.name)).toEqual([
      "andrew",
      "buffy",
      "carl",
      "christian",
      "David",
      "Elisabeth",
      "gisela",
      "oscar",
    ]);
  });

  it("should sort by one descending key", () => {
    const order: Order[] = [{ key: "age", direction: "descending" }];
    const sortedRecords = sortObjectsByProperties(data, order);
    expect(sortedRecords.map((r) => r.age)).toEqual([
      61, 51, 48, 40, 31, 27, 23, 23,
    ]);
  });

  it("should sort by multiple keys", () => {
    const order: Order[] = [
      { key: "job", direction: "ascending" },
      { key: "age", direction: "descending" },
    ];
    const sortedRecords = sortObjectsByProperties(data, order);
    expect(sortedRecords.map((r) => ({ job: r.job, age: r.age }))).toEqual([
      { job: "area manager", age: 51 },
      { job: "developer", age: 48 },
      { job: "Developer", age: 40 },
      { job: "Floor Manager", age: 61 },
      { job: "floor manager", age: 31 },
      { job: "trainee", age: 27 },
      { job: "trainee", age: 23 },
      { job: "trainee", age: 23 },
    ]);
  });

  it("should handle case-insensitive sorting", () => {
    const order: Order[] = [{ key: "job", direction: "ascending" }];
    const sortedRecords = sortObjectsByProperties(data, order);
    expect(sortedRecords.map((r) => r.job)).toEqual([
      "area manager",
      "developer",
      "Developer",
      "Floor Manager",
      "floor manager",
      "trainee",
      "trainee",
      "trainee",
    ]);
  });

  it("should handle empty records", () => {
    const order: Order[] = [{ key: "age", direction: "ascending" }];
    const sortedRecords = sortObjectsByProperties([], order);
    expect(sortedRecords).toEqual([]);
  });

  it("should handle empty order", () => {
    const sortedRecords = sortObjectsByProperties(data, []);
    expect(sortedRecords).toEqual(data);
  });

  it("should handle numerical sorting", () => {
    const numericalData: Data[] = [{ value: 3 }, { value: 1 }, { value: 2 }];
    const order: Order[] = [{ key: "value", direction: "ascending" }];
    const sortedRecords = sortObjectsByProperties(numericalData, order);
    expect(sortedRecords.map((r) => r.value)).toEqual([1, 2, 3]);
  });
});
