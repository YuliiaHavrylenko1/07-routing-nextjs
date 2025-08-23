import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: { id: string };
};

const NotePreview = async ({ params }: Props) => {
  const { id } =  params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;