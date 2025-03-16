import { Badge, Flex, Heading, Table } from "frosted-ui";

const visits = [
  {
    id: 1,
    country: "United States",
    deviceType: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referrer: "https://google.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    country: "United Kingdom",
    deviceType: "Mobile",
    browser: "Safari",
    os: "iOS",
    referrer: "https://apple.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    country: "Canada",
    deviceType: "Tablet",
    browser: "Firefox",
    os: "Android",
    referrer: "https://facebook.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    country: "Australia",
    deviceType: "Desktop",
    browser: "Edge",
    os: "MacOS",
    referrer: "https://microsoft.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 5,
    country: "Germany",
    deviceType: "Mobile",
    browser: "Chrome",
    os: "Android",
    referrer: "https://yahoo.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 6,
    country: "France",
    deviceType: "Desktop",
    browser: "Firefox",
    os: "Windows",
    referrer: "https://amazon.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 7,
    country: "Spain",
    deviceType: "Mobile",
    browser: "Safari",
    os: "iOS",
    referrer: "https://twitter.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 8,
    country: "Italy",
    deviceType: "Desktop",
    browser: "Chrome",
    os: "Linux",
    referrer: "https://instagram.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 9,
    country: "Japan",
    deviceType: "Mobile",
    browser: "Safari",
    os: "iOS",
    referrer: "https://yahoo.co.jp",
    timestamp: new Date().toISOString(),
  },
  {
    id: 10,
    country: "China",
    deviceType: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referrer: "https://baidu.com",
    timestamp: new Date().toISOString(),
  },
  {
    id: 11,
    country: "United States",
    deviceType: "Mobile",
    browser: "Firefox",
    os: "Android",
    referrer: "https://google.com",
    timestamp: new Date().toISOString(),
  },
];

export default function Home() {
  return (
    <div className="px-4 xl:px-6 mx-auto max-w-screen-2xl">
      <Flex direction="column" gap="2">
        <Heading>Analytics Dashboard</Heading>

        <Table.Root size="2" variant="surface">
          <Table.Table>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Device Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Browser</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>OS</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Referrer</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {visits.map((visit) => (
                <Table.Row key={visit.id}>
                  <Table.RowHeaderCell>{visit.country}</Table.RowHeaderCell>
                  <Table.Cell>
                    <Badge
                      color={visit.deviceType === "Mobile" ? "amber" : "green"}
                    >
                      {visit.deviceType}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{visit.browser}</Table.Cell>
                  <Table.Cell>{visit.os}</Table.Cell>
                  <Table.Cell>{new URL(visit.referrer).hostname}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Table>
          <Table.BottomBar>
            Showing 1 to {visits.length} of {visits.length} entries
          </Table.BottomBar>
        </Table.Root>
      </Flex>
    </div>
  );
}
