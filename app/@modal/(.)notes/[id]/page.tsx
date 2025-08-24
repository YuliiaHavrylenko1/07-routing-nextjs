// import NotePreviewClient from './modalPreview.client'; 
// import { fetchNoteById } from '@/lib/api';

// type Props = {
//   params: { id: string };
// };

// const NotePreview = async ({ params }: Props) => {
//   const note = await fetchNoteById(params.id);

//   return <NotePreviewClient note={note} />;
// };

// export default NotePreview;

import NotePreviewClient from './modalPreview.client';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>; 
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;     
  const note = await fetchNoteById(id);

  return <NotePreviewClient note={note} />;
}
