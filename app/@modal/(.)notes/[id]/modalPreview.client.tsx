'use client';

import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';
import { Note } from '@/types/note';

type Props = {
  note: Note;
};

export default function NotePreviewClient({ note }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
