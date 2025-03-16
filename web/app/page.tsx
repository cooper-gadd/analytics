import { Button, Flex, Heading } from "frosted-ui";

export default function Home() {
  return (
    <div className="px-4 xl:px-6 mx-auto max-w-screen-2xl">
      <Flex direction="column" gap="2">
        <Heading>Frosted UI</Heading>
        <Button>Start building</Button>
      </Flex>
    </div>
  );
}
