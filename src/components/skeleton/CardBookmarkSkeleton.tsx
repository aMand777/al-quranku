import { Card, CardBody, Stack } from '@chakra-ui/react';

function CardBookmarkSkeleton() {
  const looping = new Array(5).fill(null);
  return (
    <>
      {looping.map((_, index) => (
        <Card
          key={index}
          className="my-5"
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
        >
          <div className="skeleton bg-base-200 flex items-center">
            <div className="w-20 h-20" />
          </div>
          <Stack className="w-full bg-base-300">
            <CardBody className="skeleton">
              <div className="skeleton bg-base-200 w-32 h-4" />

              <div className="skeleton bg-base-200 w-28 h-4 my-3" />
              <div className="flex gap-5 justify-end mt-2 w-full">
                <div className="skeleton bg-base-200 w-24 h-9" />
                <div className="skeleton bg-base-200 w-16 h-9" />
              </div>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </>
  );
}

export default CardBookmarkSkeleton;
