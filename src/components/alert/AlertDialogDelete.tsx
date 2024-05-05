'use client';
import React from 'react';
import { deleteBookmarksAsync } from '@/redux/slice/bookmarks-slice';
import { useAppDispatch } from '@/redux/store';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

interface AlertDialogDeleteProps {
  idBookmark: string;
  isOpen: boolean;
  onClose: () => void;
}

function AlertDialogDelete({ isOpen, onClose, idBookmark }: AlertDialogDeleteProps) {
  const dispatch = useAppDispatch();
  const cancelRef = React.useRef(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleButtonDelete = async () => {
    setLoading(true);
    await dispatch(deleteBookmarksAsync(idBookmark));
    setLoading(false);
    onClose();
  };

  return (
    <AlertDialog 
      motionPreset='slideInBottom' 
      isOpen={isOpen} 
      leastDestructiveRef={cancelRef} 
      onClose={onClose}
      isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Bookmark
          </AlertDialogHeader>

          <AlertDialogBody>Are you sure you want to delete bookmark</AlertDialogBody>

          <AlertDialogFooter>
            <Button mr={2} ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            {loading ? (
              <Button
                isLoading
                loadingText="Delete"
                colorScheme="red"
                variant="outline"
                spinnerPlacement="start"
              ></Button>
            ) : (
              <Button colorScheme="red" onClick={handleButtonDelete} ml={3}>
                Delete
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AlertDialogDelete;
