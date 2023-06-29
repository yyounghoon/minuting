import { useTagList } from '../../../@shared/queries/tag';
import { useState } from 'react';

type Props = {
  setFieldValue: (name: string, value: any) => void;
};

export default function useTag({ setFieldValue }: Props) {
  const { tagList } = useTagList('SPACE');
  const [selectedTagsId, setSelectedTagsId] = useState<number[]>([]);

  const selectedTags = tagList?.filter((tag) => {
    if (selectedTagsId.find((selectedTagId) => selectedTagId === tag.id)) {
      return tag;
    }
    return;
  });

  const onClickTag = (tagId: number) => {
    setSelectedTagsId((prev) => [...prev, tagId]);
    setFieldValue('tagIdList', [...selectedTagsId, tagId]);
  };

  const onDeleteTag = (tagId: number) => {
    const newTagIdList = selectedTagsId.filter((id) => id !== tagId);
    setSelectedTagsId(newTagIdList);
    setFieldValue('tagIdList', newTagIdList);
  };

  return {
    tagList,
    selectedTags,
    onClickTag,
    onDeleteTag,
  };
}
